import { FC } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { navData } from "./navData";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
// Icons

const NavItemsMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button colorScheme="gray" variant="ghose" onClick={onOpen}>
        <MenuIcon />
      </Button>
      <NavItemsContainer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

interface INavItemsContainer {
  isOpen: boolean;
  onClose: () => void;
}
const NavItemsContainer: FC<INavItemsContainer> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent p={"2rem 1rem"}>
        <DrawerCloseButton />

        <DrawerBody>
          <Stack gap={4}>
            {navData.map((category) => (
              <Stack key={category.title} spacing={2}>
                <Text fontSize="lg" fontWeight="700" color="gray.500">
                  {category.title}
                </Text>
                {category.subLinks.map((link) => (
                  <Link to={link.link}>
                    <Text
                      sx={{ "&:hover": { textDecoration: "underline" } }}
                      color="gray.400"
                      onClick={onClose}
                    >
                      {link.title}
                    </Text>
                  </Link>
                ))}
              </Stack>
            ))}
            <Link to="/more/contact-us">
              <Text
                sx={{ "&:hover": { textDecoration: "underline" } }}
                fontSize="lg"
                fontWeight="700"
                color="gray.500"
                onClick={onClose}
              >
                Contact Us
              </Text>
            </Link>
            <Link to="/more/about-us">
              <Text
                sx={{ "&:hover": { textDecoration: "underline" } }}
                fontSize="lg"
                fontWeight="700"
                color="gray.500"
                onClick={onClose}
              >
                About Us
              </Text>
            </Link>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavItemsMobile;
