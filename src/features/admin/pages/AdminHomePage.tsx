import { Stack } from "@chakra-ui/react";
import PageTitle from "../components/layout/PageTitle";
import PlacesGrid from "../components/grid/places/PlacesGrid";
import CustDivider from "../../../components/common/miscellaneous/CustDivider";

const AdminHomePage = () => {
  return (
    <Stack spacing={4}>
      <PageTitle title="Manage Your Places" />
      <CustDivider />
      <PlacesGrid />
    </Stack>
  );
};

export default AdminHomePage;
