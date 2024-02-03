import { FC } from "react";
import { useDispatch } from "react-redux";
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

import { clearAdminSession } from "../../slice/sessionSlice";
import logo from "../../../../assets/images/logo.png";

// ICONS
import LogoutIcon from "@mui/icons-material/Logout";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
// ICONS

const SidebarContainer = styled(Stack)(
  ({ minimized }: { minimized: boolean }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    color: "white",
    height: "100vh",
    width: minimized ? "100px" : "400px",
    overflow: "auto",
    borderRight: "1px solid #CBD5E0",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    transition: "all 200ms",
    "@media (max-width: 1540px)": {
      width: minimized ? "100px" : "300px",
    },
  })
);

interface INavigationItem {
  active: boolean;
  icon: () => React.ReactNode;
  title: string;
  minimized: boolean;
  delayedMinimized: boolean;
}
const NavigationItem: FC<INavigationItem> = ({
  active,
  icon,
  title,
  minimized,
  delayedMinimized,
}) => {
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
      gap={3}
      alignItems={"center"}
      justifyContent={minimized ? "center" : "flex-start"}
      p={"10px 20px"}
      borderRadius={"lg"}
    >
      {icon()}
      {!minimized && <Text fontSize="lg">{!delayedMinimized && title}</Text>}
    </Flex>
  );
};

interface INavigationLinks {
  minimized: boolean;
  delayedMinimized: boolean;
}
const NavigationLinks: FC<INavigationLinks> = ({
  minimized,
  delayedMinimized,
}) => {
  return (
    <Stack gap={2} px={"20px"}>
      <NavigationItem
        active={false}
        icon={() => <PlaceIcon fontSize="large" />}
        minimized={minimized}
        delayedMinimized={delayedMinimized}
        title="Places"
      />
      <NavigationItem
        active={true}
        icon={() => <CalendarMonthIcon fontSize="large" />}
        minimized={minimized}
        delayedMinimized={delayedMinimized}
        title="Events"
      />
      <NavigationItem
        active={false}
        icon={() => <DashboardIcon fontSize="large" />}
        minimized={minimized}
        delayedMinimized={delayedMinimized}
        title="Miscellaneous"
      />
    </Stack>
  );
};

/*
  Note: delayedMinimized is there to trigger the collapsed content of the minimized sidebar to 
  appear only after the sidebar has been fully extended.
  (i.e. delayedMinimized will take 200ms to turn from true to false. Which is the time required 
  for the collapsed sidebar to fully extend.)
*/
interface IAdminSidebar {
  minimized: boolean;
  delayedMinimized: boolean;
  toogleMinimized: () => void;
}
const AdminSidebar: FC<IAdminSidebar> = ({
  minimized,
  delayedMinimized,
  toogleMinimized,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(clearAdminSession());
    navigate("/admin/login");
  };
  return (
    <SidebarContainer
      minimized={minimized}
      spacing={4}
      justifyContent={"space-between"}
    >
      <Stack spacing={5}>
        <Box>
          <Flex
            alignItems="center"
            justifyContent={"space-between"}
            gap={2}
            p={"10px 20px"}
          >
            {!minimized && (
              <Flex alignItems="center" gap={3}>
                {!delayedMinimized && (
                  <>
                    <Avatar boxSize="3rem" name="Travel.com" src={logo} />
                    <Text fontSize="xl" fontWeight={500}>
                      Admin Portal
                    </Text>
                  </>
                )}
              </Flex>
            )}
            <Button
              colorScheme="gray"
              onClick={toogleMinimized}
              boxSize={"3rem"}
            >
              {delayedMinimized ? <KeyboardArrowRightIcon /> : <MenuIcon />}
            </Button>
          </Flex>
          <Divider sx={{ background: "#CBD5E0" }} />
        </Box>

        <NavigationLinks
          minimized={minimized}
          delayedMinimized={delayedMinimized}
        />
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
        {!delayedMinimized && "Logout"}
      </Button>
      {/* Logout Button */}
    </SidebarContainer>
  );
};

export default AdminSidebar;
