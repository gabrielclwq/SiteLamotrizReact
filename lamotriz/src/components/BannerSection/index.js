import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Button, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './BannerElements';

const Banner = ({item}) => {
    const toggleHome = () => {
        scroll.scrollToTop({duration: 0});
    }

    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <Heading>{item.titulo}</Heading>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <ImgWrap>
                                    <Img src={item.img1}/>
                                </ImgWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Subtitle >{item.subtitle1}</Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow inverter={true}>
                        <Column1>
                            <TextWrapper>
                                <Subtitle >{item.subtitle2}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <ImgWrap>
                                    <Img src={item.img2}/>
                                </ImgWrap>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
                    <BtnWrap>
                        <Button to="/automacao_controle" onClick={toggleHome}>Voltar</Button>
                    </BtnWrap>
            </InfoContainer>
        </>
    )
}

export default Banner