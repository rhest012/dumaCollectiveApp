import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RegistrationSuccessDrawer = ({ isOpen }) => {
  const { onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  //   Handle Consent
  const handleConsent = () => {
    // Refresh the page
    window.location.reload();
  };
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Heading variant="h3">Thank you</Heading>
        </DrawerHeader>

        <DrawerBody>
          <Text>
            A Duma Collective staff member will be in touch in due course, by
            submitting your application you consent to Duma Collective sharing
            your personal information with clients and third party campaign
            partners.
          </Text>
        </DrawerBody>

        <DrawerFooter>
          <Button width="100%" variant="standardButton" onClick={handleConsent}>
            Consent
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RegistrationSuccessDrawer;
