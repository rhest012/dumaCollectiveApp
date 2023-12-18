import { Box } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import AccountTab from "../components/AccountTab";

const Account = () => {
  return (
    <>
      <Helmet>
        <title>Account</title>
        <meta
          name="description"
          content="Duma Collective dashboard staff login"
        />
        <link rel="canonical" href="/account" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Box
        className="body-container"
        minHeight="74vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AccountTab />
      </Box>
    </>
  );
};

export default Account;
