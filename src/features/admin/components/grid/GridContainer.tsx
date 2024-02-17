/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.min.css"; // Theme
import { CircularProgress, Flex, Text } from "@chakra-ui/react";

const OnLoadingComponent = () => {
  return (
    <Flex gap={5}>
      <CircularProgress isIndeterminate color="green.300" size="24px" />
      <Text>Loading...</Text>
    </Flex>
  );
};

const gridOptions = {
  pagination: true,
  defaultColDef: { filter: true },
  paginationPageSize: 20,
  paginationPageSizeSelector: [10, 20, 30, 40, 50],
  loadingOverlayComponent: OnLoadingComponent,
  overlayNoRowsTemplate:
    '<span class="ag-overlay-no-rows-center">No data available</span>',
};

interface IGridContainer {
  colDefs: Array<any>;
  onGridReady: (params: any) => void;
  handleRowClicked: (event: any) => void;
}
const GridContainer: FC<IGridContainer> = ({
  colDefs,
  onGridReady,
  handleRowClicked,
}) => {
  return (
    <div
      className="ag-theme-alpine-dark"
      style={{
        width: "100%",
        height: "750px",
      }}
    >
      <AgGridReact
        columnDefs={colDefs}
        rowSelection="single"
        onGridReady={onGridReady}
        gridOptions={gridOptions}
        onRowClicked={handleRowClicked}
      />
    </div>
  );
};

export default GridContainer;
