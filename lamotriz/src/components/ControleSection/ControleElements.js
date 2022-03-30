import styled from "styled-components";
import {Link, Route} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const InfoRow = styled.div`
    display: grid;
    //grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 910px) {
        grid-template-areas: ${({inverter}) => inverter ? `'col1' 'col2'` : `'col2' 'col1'`};
    }
`

export const Column1 = styled.div`
    padding-top: 50px; 
    margin-right: 50px;
    grid-area: col1;
`

export const Column2 = styled.div`
    padding-top: 50px; 
    grid-area: col2;
`

export const TextContainer = styled.div` 
    background: #f9f9f9;
`

export const TextWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    text-align: left;
`

export const TextWrapperContent = styled.div`
    margin: 50px;
`

export const Heading = styled.h1`
    margin-bottom: 12px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;
    padding: 0;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 12px;
    text-align: center;
    margin-right: 0;
    font-size: 18px;
    line-height: 24px;
    color: #808080;
    padding: 0;
`

export const ListWrapper = styled.div`
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

export const ListBox = styled(Link)`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    margin: 8px 0;
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
    padding: 8px;
    border-right: 1px solid black;
`

export const ListDate = styled.p`
    margin: auto;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    text-align: center;
    min-width: 200px;

    @media screen and (max-width: 769px) {
        font-size: 12px;
    }

    @media screen and (max-width: 535px) {
        font-size: 8px;
    }
`

export const ListTitleWrap = styled.div`
    position: relative;
    padding: 8px;
    text-align: left;
`

export const ListTitle = styled.h1`
    margin: auto;
    //text-transform: uppercase;
    letter-spacing: normal;
    font-size: 16px;
    color: #000;
    text-align: left;

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
    margin: 0 5rem;
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