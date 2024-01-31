import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

import logo from "../../../../assets/images/logo.png";

// ICONS
import LogoutIcon from "@mui/icons-material/Logout";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
// ICONS

const SidebarContainer = styled(Stack)({
  position: "fixed",
  top: 0,
  left: 0,
  color: "white",
  height: "100vh",
  width: "400px",
  overflow: "auto",
  borderRight: "1px solid #CBD5E0",
  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
});

interface INavigationItem {
  active: boolean;
  icon: () => React.ReactNode;
  title: string;
}
const NavigationItem: FC<INavigationItem> = ({ active, icon, title }) => {
  return (
    <Flex
      cursor="pointer"
      sx={{
        background: active ? "rgba(255,255,255,0.4)" : "inherit",
        "&:hover": {
          background: active
            ? "rgba(255,255,255,0.4)"
            : "rgba(255,255,255,0.2)",
        },
        "&:active": { background: "rgba(255,255,255,0.6)" },
      }}
      gap={4}
      p={"10px 20px"}
      borderRadius={"lg"}
    >
      {icon()}
      <Text fontSize="lg">{title}</Text>
    </Flex>
  );
};

const NavigationLinks = () => {
  return (
    <Stack gap={2} px={"20px"}>
      <NavigationItem
        active={false}
        icon={() => <PlaceIcon />}
        title="Places"
      />
      <NavigationItem
        active={true}
        icon={() => <CalendarMonthIcon />}
        title="Events"
      />
      <NavigationItem
        active={false}
        icon={() => <DashboardIcon />}
        title="Miscellaneous"
      />
    </Stack>
  );
};

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/login");
  };
  return (
    <SidebarContainer spacing={4} justifyContent={"space-between"}>
      <Stack spacing={5}>
        <Box>
          <Flex alignItems="center" gap={2} p={"20px"}>
            <Avatar size="lg" name="Travel.com" src={logo} />
            <Text fontSize="4xl" fontWeight={700}>
              Admin Portal
            </Text>
          </Flex>
          <Divider sx={{ background: "#CBD5E0" }} />
        </Box>
        <NavigationLinks />
      </Stack>
      {/* Logout Button */}
      <Button
        m={"20px"}
        leftIcon={<LogoutIcon />}
        size="lg"
        colorScheme="gray"
        variant="solid"
        onClick={handleClick}
      >
        Logout
      </Button>
      {/* Logout Button */}
    </SidebarContainer>
  );
};

export default AdminSidebar;
