import { Stack } from "@chakra-ui/react";
import PageTitle from "../components/layout/PageTitle";
import EventsGrid from "../components/grid/events/EventsGrid";
import CustomDivider from "../../../components/common/miscellaneous/CustomDivider";

const AdminEventsPage = () => {
  return (
    <Stack spacing={4}>
      <PageTitle title="Manage Your Events" />
      <CustomDivider />
      <EventsGrid />
    </Stack>
  );
};

export default AdminEventsPage;
