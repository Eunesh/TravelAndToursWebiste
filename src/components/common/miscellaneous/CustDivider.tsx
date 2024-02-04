import { FC } from "react";
import { Box } from "@chakra-ui/react";

interface ICustDivider {
  color?: string;
  breadth?: string;
}
const CustDivider: FC<ICustDivider> = ({ color, breadth }) => {
  return <Box bg={color} width={"full"} height={breadth} />;
};

CustDivider.defaultProps = {
  color: "gray.400",
  breadth: "1px",
};

export default CustDivider;
