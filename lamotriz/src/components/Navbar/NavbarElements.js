import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'rgba(13, 13, 13, 0.5)')};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
    transition: 0.8s all ease;

    &:hover {
        background: rgba(0, 94, 255, 0.5);
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-120%, -50%);
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
    width: 50px;
    height: 50px;
    justify-content: flex-start;
`

export const MobileIcon = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(20%, 27px);
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({isOpen}) => (isOpen ? 'transparent' : '#000')};
    text-decoration: none;
    text-align: center;

    @media screen and (max-width: 480px) {
        transform: translate(20%, 30px);
        font-size: 1.2rem;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #01bf71
    }
    &:hover {
        color: #01bf71;
    }
`;

export const LangIcon = styled.div`
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-120%, -50%);
    cursor: pointer;
    display: flex;
    align-items: center;
`;