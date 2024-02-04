import { Stack } from "@chakra-ui/react";
import PageTitle from "../components/layout/PageTitle";
import EventsGrid from "../components/grid/events/EventsGrid";
import CustDivider from "../../../components/common/miscellaneous/CustDivider";

const AdminEventsPage = () => {
  return (
    <Stack spacing={4}>
      <PageTitle title="Manage Your Events" />
      <CustDivider />
      <EventsGrid />
    </Stack>
  );
};

export default AdminEventsPage;
