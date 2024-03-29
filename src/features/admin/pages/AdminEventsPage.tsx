import { Stack } from "@chakra-ui/react";
import PageTitle from "../components/layout/PageTitle";
import EventsGrid from "../components/grid/events/EventsGrid";
import CustomDivider from "../../../components/common/miscellaneous/CustomDivider";
import AddEventComponent from "../components/grid/events/AddEventComponent";

const AdminEventsPage = () => {
  return (
    <Stack spacing={4}>
      <PageTitle title="Manage Your Events" />
      <CustomDivider />
      <Stack spacing={2}>
        <EventsGrid topPlaceholder={<AddEventComponent />} />
      </Stack>
    </Stack>
  );
};

export default AdminEventsPage;
