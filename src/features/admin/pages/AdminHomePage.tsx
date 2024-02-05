import { Stack } from "@chakra-ui/react";
import PageTitle from "../components/layout/PageTitle";
import PlacesGrid from "../components/grid/places/PlacesGrid";
import CustomDivider from "../../../components/common/miscellaneous/CustomDivider";

const AdminHomePage = () => {
  return (
    <Stack spacing={4}>
      <PageTitle title="Manage Your Places" />
      <CustomDivider />
      <PlacesGrid />
    </Stack>
  );
};

export default AdminHomePage;
