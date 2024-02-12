import { FC } from "react";
import { Button, Center, CircularProgress } from "@chakra-ui/react";

interface ISubmitBtnOrProgressSpinner {
  isSubmitting: boolean;
}
const SubmitBtnOrProgressSpinner: FC<ISubmitBtnOrProgressSpinner> = ({
  isSubmitting,
}) => {
  return (
    <>
      {isSubmitting ? (
        <Center>
          <CircularProgress isIndeterminate color="green.300" size="40px" />
        </Center>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
};

export default SubmitBtnOrProgressSpinner;
