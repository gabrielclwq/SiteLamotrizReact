import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaTimes} from 'react-icons/fa';

export const SidebarBlock = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: ${({isOpen}) => (isOpen ? '999' : '-1')};
    backdrop-filter: ${({isOpen}) => (isOpen ? 'blur(1.5px);' : 'blur(0px);')};
    transition: 0.3s ease-in-out;
`

export const SidebarContainer = styled.aside`
    position: relative;
    z-index: 999;
    width: 20%;
    height: 100%;
    background: rgba(13, 13, 13, 0.9);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s all ease;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    min-width: 280px;

    @media screen and (max-width: 415px) {
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #005eff;
        transition: 0.2s ease-in-out;
    }
`;
