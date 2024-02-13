import { FC } from "react";
import styled from "@emotion/styled";
import parse from "html-react-parser";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useField } from "formik";
import WysiwygContainer from "./WysiwygContainer";

const CustomStack = styled(Stack)(({ isInvalid }: { isInvalid: boolean }) => ({
  border: isInvalid ? "2px solid #E53E3E" : "none",
}));

interface IWysiwygField {
  name: string;
  label: string;
}
const WysiwygField: FC<IWysiwygField> = ({ name, label }) => {
  const [field, meta, helper] = useField(name);
  const handleSetData = (value: string) => {
    helper.setValue(value);
  };
  return (
    <Box>
      <CustomStack isInvalid={Boolean(meta.touched && meta.error)} spacing={2}>
        <Text fontSize="xl">{label}</Text>
        <Flex gap={5}>
          <WysiwygContainer data={field.value} setData={handleSetData} />
          <Box
            flex="1"
            border="1px solid black"
            h="840px"
            overflow="auto"
            p={2}
          >
            {parse(field.value)}
          </Box>
        </Flex>
      </CustomStack>
      {Boolean(meta.touched && meta.error) && (
        <Text fontSize="sm" mt={2} color="red.500">
          {meta.error}
        </Text>
      )}
    </Box>
  );
};

export default WysiwygField;
