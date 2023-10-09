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
import Logo from "../assets/Duma-Collective-Logo.svg";
import React from "react";
import HeaderImage from "../assets/headers/grind-header.jpg";
import { Links } from "../styles/Navbar.style";
import {
  Link,
  NavLink,
  Link as ReachLink,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const menuItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "What We Do",
      url: "/what-we-do",
    },
    {
      name: "The Grind",
      url: "/the-grind",
    },
    {
      name: "The Squad",
      url: "/the-squad",
    },
    {
      name: "The Buzz",
      url: "/the-buzz",
    },
    {
      name: "Get In Touch",
      url: "/get-in-touch",
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
      alignItems="center"
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
              fontSize="0.9rem"
              textTransform="uppercase"
            >
              {menuItem.name}
            </Heading>
          </Link>
        ))}
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
          alignContent="space-between"
          justifyContent="space-between"
          background="#fff"
          // overflow="hidden"
        >
          {menuItems.map((menuItem, index) => (
            <NavLink to={menuItem.url}>
              <MenuItem
                className="menu-item-container"
                position="relative"
                key={index}
                width="100%"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignContent="center"
                _hover={{
                  background: "none",
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

export default Nav;
