import { Stack } from "@chakra-ui/react";
import PageTitle from "../components/layout/PageTitle";
import PlacesGrid from "../components/grid/places/PlacesGrid";
import CustomDivider from "../../../components/common/miscellaneous/CustomDivider";
import AddPlaceComponent from "../components/grid/places/AddPlaceComponent";

const AdminHomePage = () => {
  return (
    <Stack spacing={4}>
      <PageTitle title="Manage Your Places" />
      <CustomDivider />
      <Stack spacing={2}>
        <AddPlaceComponent />
        <PlacesGrid />
      </Stack>
    </Stack>
  );
};

export default AdminHomePage;
