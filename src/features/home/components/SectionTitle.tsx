import { Text } from "@chakra-ui/react";
import { FC } from "react";

interface ISectionTitle {
  title: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title }) => {
  return (
    <Text
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
      className="dancing-font"
    >
      {title}
    </Text>
  );
};
export default SectionTitle;
