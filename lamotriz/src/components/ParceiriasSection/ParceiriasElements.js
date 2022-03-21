import styled from "styled-components";

export const EstruturaContainer = styled.div` 
    color: #fff;
    min-height: fit-content;
    background: #f9f9f9; //rgba(0, 94, 255, 0.5);

`

export const EstruturaWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    margin: auto;
`

export const FeatureImagesBg = styled.div`
    display: block;
    justify-items: center;
    text-align: center;
    position: relative;
    margin-top: 32px;
    margin-bottom: 32px;
`

export const FeatureImg = styled.img`
    background: #fff ;
    width: 300px;
    height: 400px;
    margin: 30px 30px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 1);
    text-align: center;
    border-radius: 16px;
    object-fit: scale-down;
    //filter: drop-shadow(0 0 60px rgba(249,249,249));

    @media screen and (max-width: 450px) {
        width: 25%;
        height: 25%;
    }
`

export const TextWrapper = styled.div`
    text-align: center;
    margin-top: 80px;
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