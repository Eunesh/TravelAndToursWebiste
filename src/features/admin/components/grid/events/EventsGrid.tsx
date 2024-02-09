import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { GridApi, GridReadyEvent } from "ag-grid-community";
import GridContainer from "../GridContainer";
import { useFetchEventsDataLazyQuery } from "../../../../../generated/graphql";
import { Flex, Input } from "@chakra-ui/react";

// Column Definitions: Defines & controls grid columns.
const colDefs = [
  { headerName: "S.N.", valueGetter: "node.rowIndex + 1", width: 100 },
  { field: "id" },
  { field: "name" },
  { field: "description", flex: 1 },
  { field: "pictureUrls" },
  { field: "place" },
];

interface IEventGrid {
  topPlaceholder: ReactNode;
}
const EventsGrid: FC<IEventGrid> = ({ topPlaceholder }) => {
  const [gridApi, setGridApi] = useState<GridApi>();
  const [quickFilterText, setQuickFilterText] = useState("");
  const columnDefs = useMemo(() => colDefs, []);

  const [fetchEvents, { loading, data, error }] = useFetchEventsDataLazyQuery();

  const onGridReady = (event: GridReadyEvent) => {
    const { api } = event;
    fetchEvents();
    setGridApi(api);
  };

  useEffect(() => {
    if (gridApi) {
      if (loading) {
        gridApi.showLoadingOverlay();
      } else {
        gridApi.hideOverlay();
        if (error) {
          gridApi.showNoRowsOverlay();
        }
        const collection = data?.events || [];

        gridApi.setRowData(collection);
      }
    }
  }, [loading, error, data]); // eslint-disable-line react-hooks/exhaustive-deps

  // Filtering the Whole Grid
  const handleFilterChange = (event: any) => {
    const filterText = event.target.value;
    setQuickFilterText(filterText);
    if (gridApi) {
      gridApi.setQuickFilter(filterText);
    }
  };
  // Filtering the whole grid

  return (
    <>
      <Flex gap={5} justifyContent="space-between">
        <Input
          type="text"
          placeholder="Quickly Filter the grid"
          value={quickFilterText}
          onChange={handleFilterChange}
        />
        {topPlaceholder}
      </Flex>
      <GridContainer colDefs={columnDefs} onGridReady={onGridReady} />
    </>
  );
};

export default EventsGrid;
