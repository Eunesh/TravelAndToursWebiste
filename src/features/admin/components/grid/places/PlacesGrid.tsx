import { Flex, Input } from "@chakra-ui/react";
import { FC, ReactNode, useCallback, useMemo } from "react";
import { GridApi, GridReadyEvent } from "ag-grid-community";
import GridContainer from "../GridContainer";
import { useFetchPlacesDataLazyQuery } from "../../../../../generated/graphql";
import { toast } from "react-toastify";
import RenderEventCount from "../cellRenderer/RenderEventCount";
import RenderPictures from "../cellRenderer/RenderPictures";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlaceGridSearchTerm,
  setPlaceGridApi,
  setPlaceGridSearchTerm,
  setSelectedPlaceIndex,
} from "../../../../places/slice/placeSlice";
import RenderDescription from "../cellRenderer/RenderDescription";
import RenderPlaceActions from "../cellRenderer/RenderPlaceActions";

// Column Definitions: Defines & controls grid columns.
const colDefs = [
  { headerName: "S.N.", valueGetter: "node.rowIndex + 1", width: 100 },
  { field: "id" },
  { field: "name" },
  {
    field: "description",
    flex: 1,
    minWidth: 200,
    cellRenderer: RenderDescription,
  },
  {
    field: "pictureUrls",
    headerName: "Pictures",
    cellRenderer: RenderPictures,
  },
  {
    field: "events",
    headerName: "Event Count",
    cellRenderer: RenderEventCount,
  },
  {
    field: "id",
    headerName: "Actions",
    cellRenderer: RenderPlaceActions,
  },
];
interface IPlaceGrid {
  topPlaceholder: ReactNode;
}
const PlacesGrid: FC<IPlaceGrid> = ({ topPlaceholder }) => {
  const searchTerm = useSelector(selectPlaceGridSearchTerm);
  const dispatch = useDispatch();

  const columnDefs = useMemo(() => colDefs, []);

  const [fetchData] = useFetchPlacesDataLazyQuery();

  const onGridReady = (event: GridReadyEvent) => {
    const { api } = event;
    dispatch(setPlaceGridApi(api));
    loadRowData(api);
  };

  const loadRowData = useCallback((api: GridApi) => {
    api.showLoadingOverlay();
    fetchData()
      .then((response) => response.data?.places)
      .then((places) => {
        api.hideOverlay();
        api.setGridOption("rowData", places || []);
      })
      .catch((error) => {
        toast.error(error.message);
        api.showNoRowsOverlay();
        api.setGridOption("rowData", []);
      });
  }, []);

  // Filtering the Whole Grid
  const handleFilterChange = (event: any) => {
    const filterText = event.target.value;
    dispatch(setPlaceGridSearchTerm(filterText));
  };
  // Filtering the whole grid

  const handleRowClicked = (event: any) => {
    console.log(event.rowIndex);
    dispatch(setSelectedPlaceIndex(event.rowIndex));
  };

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
      <GridContainer colDefs={columnDefs} onGridReady={onGridReady} handleRowClicked={handleRowClicked} />
    </>
  );
};

export default PlacesGrid;
