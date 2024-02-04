/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { AgGridReact } from "ag-grid-react";

type ColDefType = {
  field: string;
};
interface IGridContainer {
  rowData: Array<any>;
  colDefs: Array<ColDefType>;
}
const GridContainer: FC<IGridContainer> = ({ rowData, colDefs }) => {
  return (
    <div
      className="ag-theme-alpine"
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default GridContainer;
