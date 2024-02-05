import { FC } from "react";
import { Box } from "@chakra-ui/react";

interface ICustomDivider {
  color?: string;
  breadth?: string;
}
const CustomDivider: FC<ICustomDivider> = ({ color, breadth }) => {
  return <Box bg={color} width={"full"} height={breadth} />;
};

CustomDivider.defaultProps = {
  color: "gray.400",
  breadth: "1px",
};

export default CustomDivider;
