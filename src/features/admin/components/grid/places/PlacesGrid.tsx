import GridContainer from "../GridContainer";

const rowData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

// Column Definitions: Defines & controls grid columns.
const colDefs = [
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" },
];
const PlacesGrid = () => {
  return <GridContainer rowData={rowData} colDefs={colDefs} />;
};

export default PlacesGrid;
