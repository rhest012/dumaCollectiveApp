import React from "react";
import {
  Link,
  NavLink,
  Link as ReachLink,
  useLocation,
} from "react-router-dom";
// UX
import {
  Box,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Logo from "../../../assets/Duma-Collective-Logo.svg";
// Framer Motion
import { motion } from "framer-motion";
// User Context
import useUserContext from "../../../actions/useUserContext";
import SignOut from "./uxComponents/SignOutButton";

const DashboardNav = () => {
  // Manage Active User
  const { activeUser } = useUserContext();

  const menuItems = [
    {
      name: "Employees",
      url: "/employees",
    },
    {
      name: "Performance Review",
      url: "/performance-review",
    },
  ];

  // Style Active Location
  const location = useLocation();

  // Framer Motion
  const MotionImage = motion(Image);

  return (
    <Flex
      height="80px"
      justifyContent="space-between"
      alignItems="flex-end"
      padding="1rem 2rem"
    >
      <Box>
        <MotionImage
          src={Logo}
          height="60px"
          layoutId="duma-logo"
          transition={{ ease: "linear", duration: 1.6 }}
        />
      </Box>

      <Flex
        className="large-screen-menu"
        justifyContent="flex-end"
        gap={{ lg: "1rem", xl: "3rem" }}
        display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
      >
        {menuItems.map((menuItem, index) => (
          <Link className="link-container" key={index} to={menuItem.url}>
            <Heading
              className={`menu-item ${
                location.pathname === menuItem.url ? "active" : ""
              }`}
              variant="h3"
              fontSize="0.75rem"
              textTransform="uppercase"
              display={
                activeUser &&
                (menuItem.name === "Employees" &&
                activeUser.department !== "Exco"
                  ? "none"
                  : "block")
              }
            >
              {menuItem.name}
            </Heading>
          </Link>
        ))}
        <SignOut />
      </Flex>
      <Menu closeOnSelect colorScheme="none" className="mobile-menu">
        <MenuButton
          display={{ base: "block", md: "block", lg: "none", xl: "none" }}
        >
          <Heading variant="h6">Menu</Heading>
        </MenuButton>
        <MenuList
          width="100vw"
          height="93vh"
          paddingX="2rem"
          marginTop="10px"
          display="flex"
          flexDir="column"
          // alignContent="space-between"
          justifyContent="space-between"
          background="#fff"
          borderTop="1px solid #1E174B"
          borderRadius="0"
          // overflow="hidden"
        >
          {menuItems.map((menuItem, index) => (
            <NavLink key={index} to={menuItem.url}>
              <MenuItem
                className="menu-item-container"
                position="relative"
                width="100%"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignContent="center"
                _hover={{
                  backgroundColor: "transparent",
                }}
              >
                <Heading
                  className={`menu-item ${
                    location.pathname === menuItem.url ? "active" : ""
                  }`}
                  variant="h3"
                >
                  {menuItem.name}
                </Heading>
              </MenuItem>
            </NavLink>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default DashboardNav;
