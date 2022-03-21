import styled from "styled-components";
import {Link, Route} from 'react-router-dom';

/* export const InfoContainer = styled.div` 
    color: #fff;
    background: #f9f9f9;
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 910px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1' 'col2'`)};
    }
`

export const Column1 = styled.div`
    margin: 50px;
    padding-bottom: 50px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin: 50px;
    padding-bottom: 50px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    text-align: center;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 35px;
    margin-right: 0;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
    text-align: center;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const ImgWrap = styled.div`
    height: 100%;
    text-align: center;
`

export const Img = styled.img`
    max-width:400px;
    max-height:100%;
    margin: auto;
    //box-shadow: 0 4px 60px rgba(0, 0, 0, 1);
    text-align: center;
    //border-radius: 16px;
    filter: drop-shadow(0 0 60px rgba(0, 0, 0, 1));

    @media screen and (max-width: 768px) {
        width: 50%;
        height: 50%;
    }
`

export const Button = styled(Link)`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 12px 30px;
    color: #f9f9f9;
    text-decoration: none;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #005eff
    }
`

export const ButtonA = styled.a`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 12px 30px;
    color: #f9f9f9;
    text-decoration: none;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #005eff
    }
`
 */

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