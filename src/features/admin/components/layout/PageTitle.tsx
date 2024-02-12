import { FC } from "react";
import { Text } from "@chakra-ui/react";

interface IPageTitle {
  title: string;
}
const PageTitle: FC<IPageTitle> = ({ title }) => {
  return <Text fontSize="3xl" fontWeight={700}>{title}</Text>;
};

export default PageTitle;
