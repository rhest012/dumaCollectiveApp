
import React, {useState} from 'react'
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
  NavbarLinkMobile
 } from '../styles/Navbar.style'
 import LogoImage from '../assets/Duma-Collective-Logo.svg'

const Navbar = () => {
  const [navBarOpener, setNavBarOpener] = useState(false);


  return (
    <NavbarContainer navBarOpener={ navBarOpener }>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImage}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLink> Home</NavbarLink>
          <MobileMenuButton onClick={() => {
            setNavBarOpener((curr) => !curr);
          }}
            >
              {navBarOpener ? <> &#10005; </> : <> Menu </>}
          </MobileMenuButton>
        </RightContainer>
      </NavbarInnerContainer>
      { navBarOpener && ( 
        <NavbarMobileContainer>
        <NavbarLinkMobile to="/">Home</NavbarLinkMobile>
        <NavbarLinkMobile to="/what-we-do">What We Do</NavbarLinkMobile>
        <NavbarLinkMobile to="/the-grind">The Grind</NavbarLinkMobile>
        <NavbarLinkMobile to="/squad">The Squad</NavbarLinkMobile>
        <NavbarLinkMobile to="/newsroom">Newsroom</NavbarLinkMobile>
        <NavbarLinkMobile to="/contact">Contact</NavbarLinkMobile>
      </NavbarMobileContainer>
      )}
    </NavbarContainer>
   
    )
}

export default Navbar