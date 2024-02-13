import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import { GridApi, GridReadyEvent } from "ag-grid-community";
import GridContainer from "../GridContainer";
import { useFetchEventsDataLazyQuery } from "../../../../../generated/graphql";
import { Flex, Input } from "@chakra-ui/react";
import { toast } from "react-toastify";
import RenderEventPlace from "../cellRenderer/RenderEventPlace";
import RenderPictures from "../cellRenderer/RenderPictures";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEventGridSearchTerm,
  setEventGridApi,
  setEventGridSearchTerm,
} from "../../../../events/slice/eventSlice";

// Column Definitions: Defines & controls grid columns.
const colDefs = [
  { headerName: "S.N.", valueGetter: "node.rowIndex + 1", width: 100 },
  { field: "id" },
  { field: "name" },
  { field: "description", flex: 1, minWidth: 200 },
  {
    field: "pictureUrls",
    headerName: "Pictures",
    cellRenderer: RenderPictures,
  },
  {
    field: "place",
    cellRenderer: RenderEventPlace,
  },
];

interface IEventGrid {
  topPlaceholder: ReactNode;
}
const EventsGrid: FC<IEventGrid> = ({ topPlaceholder }) => {
  const searchTerm = useSelector(selectEventGridSearchTerm);
  const dispatch = useDispatch();
  const columnDefs = useMemo(() => colDefs, []);

  const [fetchData] = useFetchEventsDataLazyQuery();

  const onGridReady = (event: GridReadyEvent) => {
    const { api } = event;
    dispatch(setEventGridApi(api));
    loadRowData(api);
  };

  const loadRowData = useCallback((api: GridApi) => {
    api.showLoadingOverlay();
    fetchData()
      .then((response) => response.data?.events)
      .then((events) => {
        api.hideOverlay();
        api.setRowData(events || []);
      })
      .catch((error) => {
        toast.error(error.message);
        api.showNoRowsOverlay();
        api.setRowData([]);
      });
  }, []);

  // Filtering the Whole Grid
  const handleFilterChange = (event: any) => {
    const filterText = event.target.value;
    dispatch(setEventGridSearchTerm(filterText));
  };
  // Filtering the whole grid

  return (
    <>
      <Flex gap={5} justifyContent="space-between">
        <Input
          type="text"
          placeholder="Quickly Filter the grid"
          value={searchTerm}
          onChange={handleFilterChange}
        />
        {topPlaceholder}
      </Flex>
      <GridContainer colDefs={columnDefs} onGridReady={onGridReady} />
    </>
  );
};

export default EventsGrid;
