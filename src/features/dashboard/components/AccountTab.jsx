import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import SignUpForm from "./SignUpForm";

const AccountTab = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Tabs isFitted variant="enclosed" width="100%">
        <TabList mb="1rem">
          <Tab>
            <Heading variant="h3" as="h3">
              Sign Up
            </Heading>
          </Tab>
          <Tab>
            <Heading variant="h3" as="h3">
              Login
            </Heading>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUpForm />
          </TabPanel>
          <TabPanel>hello</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AccountTab;
