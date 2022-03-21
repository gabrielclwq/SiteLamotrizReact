import styled from "styled-components";
import {Link} from 'react-scroll';

export const EstruturaContainer = styled.div` 
    color: #fff;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const EstruturaWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const EstruturaRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 910px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1' 'col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    grid-area: col2;
`

export const FeatureImagesBg = styled.div`
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    position: relative;
    margin: auto;
`

export const FeatureImg = styled.img`
    cursor: pointer;
    padding: 7px;
    border-radius: 50%;
    height: 64px;
    width: 64px;
    margin-left: 10px;
    border: ${({active}) => (active ? '4px solid rgba(65, 65, 65, 0.75)' : '4px solid transparent')};

    &:hover {
        background-color: transparent;
        border: ${({active}) => (active ? '4px solid rgba(65, 65, 65, 0.75)' : '4px solid #005eff')};
        transition: 0.1s ease-in-out;
    }
`

export const TextWrapper = styled.div`
    text-align: center;
    padding-top: 0;
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

export const Subtitle = styled.div`
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
    border-radius: 16px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 1);
    text-align: center;

    @media screen and (max-width: 768px) {
        max-width:50%;
        max-height:50%;
    }
`

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({darkBg}) => (darkBg ? '#010606' : '#f9f9f9')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({darkBg}) => (darkBg ? '#f9f9f9' : '#010606')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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