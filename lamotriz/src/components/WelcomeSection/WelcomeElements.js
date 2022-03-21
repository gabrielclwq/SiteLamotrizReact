import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 80px;
    height: 320px;
    position: relative;
    z-index: 1;
    background: #f9f9f9;
`

export const WelcomeBg = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
`

export const WelcomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
`

export const WelcomeH1 = styled.h1`
    margin: 20px;
    color: #000;
    font-size: 64px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const WelcomeP = styled.h1`
    margin: 20px;
    color: #000;
    font-size: 36px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const WelcomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const Img = styled.img`
    width: 50px;
    height: 50px;
    justify-content: flex-start;
`