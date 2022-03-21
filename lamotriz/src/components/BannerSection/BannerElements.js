import styled from "styled-components";
import {Link} from 'react-router-dom';

export const InfoContainer = styled.div` 
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
    text-align: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 910px) {
        grid-template-areas: ${({inverter}) => inverter ? `'col1' 'col2'` : `'col2' 'col1'`};
    }
`

export const Column1 = styled.div`
    margin: 50px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin: 50px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    display: block;
    text-align: center;
    padding-top: 0;
`

export const Heading = styled.h1`
    text-decoration: none;
    margin-bottom: 24px;
    font-size: 36x;
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
    padding: 50px;
`

export const ImgWrap = styled.div`
    text-decoration: none;
    height: 100%;
    text-align: center;
    padding-top: 30px;
`

export const Img = styled.img`
    max-width:400px;
    height:350px;
    margin: auto;
    text-align: center;
    filter: drop-shadow(0 0 60px rgba(0, 0, 0, 1));

    @media screen and (max-width: 768px) {
        width: 50%;
        height: 50%;
        padding-top: 30px;
    }
`

export const Button = styled(Link)`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 14px 48px;
    color: #f9f9f9;
    text-decoration: none;
    font-size: 20px;
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
    padding: 14px 48px;
    color: #f9f9f9;
    text-decoration: none;
    font-size: 20px;
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