import { FC } from "react";
import { IModalContainer } from "./ModalTypesNInterfaces";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import CustomModalOverlay from "./CustomModalOverlay";

const ModalContainer: FC<IModalContainer> = ({
  isOpen,
  onClose,
  title,
  hasFooter = true,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <CustomModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {hasFooter && (
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
