import styled from "styled-components";

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

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 12px;
    margin-right: 0;
    font-size: 18px;
    line-height: 24px;
    color: #808080;
    padding: 0;

    @media screen and (max-width: 769px) {
        font-size: 12px;
    }

    @media screen and (max-width: 535px) {
        font-size: 8px;
    }

    @media screen and (max-width: 280px) {
        font-size: 4px;
    }
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

    @media screen and (max-width: 769px) {
        font-size: 12px;
    }

    @media screen and (max-width: 535px) {
        font-size: 8px;
    }

    @media screen and (max-width: 280px) {
        font-size: 4px;
    }
`

export const ListBox = styled.a`
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
    min-width: 150px;;

    @media screen and (max-width: 769px) {
        font-size: 12px;
        min-width: 100px;;
    }

    @media screen and (max-width: 535px) {
        font-size: 8px;
        min-width: 75px;
    }

    @media screen and (max-width: 280px) {
        font-size: 4px;
        min-width: 35px;
    }
`

export const ListTitleWrap = styled.div`
    position: relative;
    padding: 8px;
    text-align: left;
`

export const ListTitle = styled.h1`
    margin: auto;
    text-transform: uppercase;
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

    @media screen and (max-width: 280px) {
        font-size: 4px;
    }
`

export const ListIconWrap = styled.div`
    padding: 8px;
    cursor: pointer;
    color: #000;
    margin-left: auto;
`