import { Card, CardBody, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CardContainer = styled(Card)({
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.3s ease-in-out;",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  padding: "30px",
});

interface propstype {
  title: string;
  body: string;
}
const CardComponent = ({ title, body }: propstype) => {
  return (
    <CardContainer>
      <CardBody>
        <Stack gap={"10px"}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text fontSize={"sm"}>{body}</Text>
        </Stack>
      </CardBody>
    </CardContainer>
  );
};

export default CardComponent;
