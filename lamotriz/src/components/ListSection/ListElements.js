import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'

export const ListContainer = styled.div`
    background: #f9f9f9 ;
`

export const ListWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const ListHeadline = styled.h1`
    color: #000;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const ListBox = styled.a`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    margin: 8px 24px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 8px;
    cursor: default;
    text-decoration: none;

    &:hover {
        background: rgba(0, 0, 0, 0.27);
    }
`

export const ListDateWrap = styled.div`
    position: relative;
    align-items: center;
    padding: 26px;
    border-right: 1px solid black;
`

export const ListDate = styled.p`
    margin: auto;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    text-align: center;
    min-width: 75px;

    @media screen and (max-width: 769px) {
        font-size: 12px;
    }

    @media screen and (max-width: 535px) {
        font-size: 8px;
    }
`

export const ListTitleWrap = styled.div`
    position: relative;
    align-items: center;
    padding: 8px;
    text-align: center;
    margin: auto;
`

export const ListTitle = styled.h1`
    margin: auto;
    text-transform: uppercase;
    letter-spacing: normal;
    text-align: center;
    font-size: 16px;
    color: #000;
    text-align: center;

    @media screen and (max-width: 769px) {
        font-size: 12px;
    }

    @media screen and (max-width: 535px) {
        font-size: 8px;
    }
`

export const ListIconWrap = styled.div`
    padding: 8px;
    cursor: pointer;
    color: #000;
    margin-left: auto;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: auto;
    padding: 0;
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 32px;

    @media screen and (max-width: 420px) {
        font-size: 12px;
    }

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    &:active {
        border-bottom: 3px solid rgba(0, 94, 255, 0.5);
    }
    &:hover {
        color: rgba(0, 94, 255, 0.5);
    }
`;

export const Nav = styled.nav`
    z-index: 100;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: relative;
    top: 0;
    background: rgba(13, 13, 13, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
    transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`;