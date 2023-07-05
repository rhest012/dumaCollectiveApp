import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav `
    width: 100%;
    height: ${(props) => (props.navBarOpener ? "100vh" : "80px")};
    /* padding: 10px 20px; */
    display: flex;
    flex-direction: column;
    align-items: baseline;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    flex: 20%;
    padding: 10px 0 10px 1.5rem
`

export const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    flex: 80%;
    gap: 7%;
    padding: 0 2rem 0 0; 
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarkLinkContainer = styled.div`
    display: flex;
`


export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`

export const NavbarLink = styled(Link) `
    color: #1E174B;
    background-color: "#ffffff";
    text-align: center;
    font-size: 0.9rem;
    font-family: 'Roc Grotesk Wide', Arial, sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    transition: all 1s;

     &::after {
        content: "";
        width: 0;
        height: 3px;
        background: #1E174B;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        }

    &:hover {
        font-weight: 600;
    }
    
    &:hover::after {
        width: 100%;
    }

    &::active {
        font-weight: 600;
        content: "";
        width: 0;
        height: 3px;
        background: #1E174B;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        width: 100%;
        }

    @media (max-width:700px) {
        display: none;
    }
`;

export const Logo = styled.img `
    height: auto;
    width: 200px;
`;

export const MobileMenuButton = styled.button `
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #1E174B;
    font-size:  1.25rem;
    cursor: pointer; 

    @media (min-width:700px) {
        display: none;
    }
`;

export const NavbarMobileContainer = styled.div`
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    background-color: #ffffff;
`;

export const NavbarLinkMobile = styled(Link) `
    color: #1E174B;
    font-size: 3.05rem;
    font-family: 'Roc Grotesk Wide', Arial, sans-serif;
    text-transform: uppercase;
    text-decoration: none;
`;

export const Links = styled(Link) `
    color: #1E174B;
    font-weight: 400;
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
    font-family: 'Roc Grotesk Wide', Arial, sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    /* transform: translateY(-200%); */
    transition: all 1s;

     &::after {
        content: "";
        width: 0;
        height: 1px;
        background: #1E174B;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        }

    &:hover {
        font-weight: 600;
        transition: 0.4s ease all;
        /* transform: translateY(-200%) */
    }
    
    &:hover::after {
        width: 100%;
    }

    &::active {
        font-weight: 600;
        content: "";
        width: 0;
        height: 3px;
        background: #1E174B;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        width: 100%;
        }
`;