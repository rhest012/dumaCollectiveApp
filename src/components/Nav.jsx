import { Box, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Logo from "../assets/Duma-Collective-Logo.svg"
import React from 'react'
import HeaderImage from "../assets/headers/grind-header.jpg"
import { Links } from '../styles/Navbar.style'
import { Link, NavLink, Link as ReachLink, useLocation} from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {
    const menuItems = [
        {
            name: "Home",
            url : "/",
        },
        {
            name: "What We Do",
            url : "/what-we-do",
        },
        {
            name: "The Grind",
            url : "/the-grind",
        },
        {
            name: "The Squad",
            url : "/the-squad",
        },
        {
            name: "The Buzz",
            url : "/the-buzz",
        },
        {
            name: "Get In Touch",
            url : "/get-in-touch",
        },
    ]

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
        <Menu 
            closeOnSelect
            colorScheme="none"
        >
            <MenuButton>
                <Heading variant="h6">
                    Menu    
                </Heading>
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

                        _hover = {{
                            background:"none"
                        }}
                    >
                        
                            <Heading 
                                className="menu-item__heading" 
                                variant="h1"
                            >
                                {menuItem.name}
                            </Heading>
                            <Image 
                                className="menu-item__image"
                                // height="150px"
                                src={HeaderImage}
                            />
                        
                    </MenuItem>
                </NavLink>
            ))}
            </MenuList>
        </Menu>
        {/* <Box display="flex" justifyContent="flex-end" paddingRight="2rem" gap="4rem">
        {/* {menuItems.map((menuItem, index) => { */}
            {/* <NavLink to="/">
                <Heading variant="h6" fontSize="1rem">
                    Home
                </Heading>
            </NavLink>
            <NavLink to="/what-we-do">
                <Heading variant="h6" fontSize="1rem">
                    What We Do
                </Heading>
            </NavLink>
            <NavLink to="/the-grind">
                <Heading variant="h6" fontSize="1rem">
                    The Grind
                </Heading>
            </NavLink>
            <NavLink to="/the-squad">
                <Heading variant="h6" fontSize="1rem">
                    The Squad
                </Heading>
            </NavLink>
            <NavLink to="/the-buzz">
                <Heading variant="h6" fontSize="1rem">
                    The Buzz
                </Heading>
            </NavLink>
            <NavLink to="/get-in-touch">
                <Heading variant="h6" fontSize="1rem">
                    Get In Touch
                </Heading>
            </NavLink> */}
        {/* })} */}
        {/* </Box> */} 


    </Flex>
  )
}

export default Nav