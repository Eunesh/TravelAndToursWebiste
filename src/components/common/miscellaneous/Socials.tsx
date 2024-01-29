import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
// Icons

const Socials = () => {
  return (
    <Flex gap={5}>
      <Link to="facebook.com" target="_blank">
        <FacebookIcon className="socials-icon" sx={{ color: "#4267B2" }} />
      </Link>
      <Link to="instagram.com" target="_blank">
        <InstagramIcon className="socials-icon" sx={{ color: "#CC2C6E" }} />
      </Link>
      <Link to="twitter.com" target="_blank">
        <XIcon className="socials-icon" sx={{ color: "#4267B2" }} />
      </Link>
      <Link to="gmail.com" target="_blank">
        <EmailIcon className="socials-icon" sx={{ color: "#7D7D7D" }} />
      </Link>
    </Flex>
  );
};

export default Socials;
