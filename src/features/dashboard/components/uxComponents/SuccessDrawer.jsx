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
import { useLocation, useNavigate } from "react-router-dom";

const SuccessDrawer = ({ isOpen }) => {
  // Handle Drawer location
  const location = useLocation();

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
        <DrawerHeader>
          <Heading variant="h4">
            {location.pathname == "/performance-review"
              ? "Performance Review Successful"
              : "Thank you"}
          </Heading>
        </DrawerHeader>

        <DrawerBody>
          <Text>
            {location.pathname == "/performance-review"
              ? "Thank you for taking the time to fill in the performance review."
              : "  A Duma Collective staff member will be in touch in due course, by submitting your application you consent to Duma Collective sharing your personal information with clients and third party campaign partners."}
          </Text>
        </DrawerBody>

        <DrawerFooter>
          <Button width="100%" variant="standardButton" onClick={handleConsent}>
            {location.pathname == "/performance-review" ? "Close" : "Consent"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SuccessDrawer;
