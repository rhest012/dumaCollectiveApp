import React, { useState } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarMobileContainer,
  NavbarLink,
  Logo,
  MobileMenuButton,
  NavbarLinkContainer,
  NavbarLinkMobile,
  Links,
} from '../styles/Navbar.style';
import LogoImage from '../assets/Duma-Collective-Logo.svg';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavbarContainer navBarOpener={isNavOpen}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImage}></Logo>
        </LeftContainer>
        <RightContainer>
          <Links to="/">Home</Links>
          <Links to="what-we-do">What We Do</Links>
          <Links to="the-grind">The Grind</Links>
          <Links to="the-squad">The Squad</Links>
          <Links to="the-buzz">The Buzz</Links>
          <Links to="/get-in-touch">Get In Touch</Links>
          <MobileMenuButton
            onClick={() => {
              setIsNavOpen((prevNavOpen) => !prevNavOpen);
            }}
          >
            {isNavOpen ? <> &#10005; </> : <> &#9776; </>}
          </MobileMenuButton>
        </RightContainer>
      </NavbarInnerContainer>
      {isNavOpen && (
        <NavbarMobileContainer isOpen={isNavOpen}>
          <NavbarLinkMobile
            to="/"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Home
          </NavbarLinkMobile>
          <NavbarLinkMobile
            to="/what-we-do"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            What We Do
          </NavbarLinkMobile>
          <NavbarLinkMobile
            to="/the-grind"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            The Grind
          </NavbarLinkMobile>
          <NavbarLinkMobile
            to="/the-squad"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            The Squad
          </NavbarLinkMobile>
          <NavbarLinkMobile
            to="/the-buzz"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Newsroom
          </NavbarLinkMobile>
          <NavbarLinkMobile
            to="/get-in-touch"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Contact
          </NavbarLinkMobile>
        </NavbarMobileContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
