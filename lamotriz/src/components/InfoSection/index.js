import React from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Button, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements';
import control_img from "../../images/control_img.svg"
import eficiencia_img from "../../images/eficiencia_img.svg"
import publicacoes_img from "../../images/publicacoes_img.svg"
import logo from "../../images/logo-lamotriz.png"

const InfoSection = ({lang}) => {
    
    const toggleHome = () => {
        scroll.scrollToTop({duration: 0});
    }

    const textos = {
        lamotriz: "Lamotriz",
        descricaoLamotrizPT: "O Laboratório de Sistemas de Forças Motrizes do Departamento de Engenharia Elétrica da Universidade Federal do Ceará, possui expertise em simulações e ensaios de cargas industriais. O comportamento é analisado considerando a aplicação de técnicas de automação e controle, para a otimização operacional do sistema ou sua eficiência energética",
        descricaoLamotrizEN: "The Driving Force Systems Laboratory of the Electrical Engineering Department of the Federal University of Ceará has expertise in simulations and tests of industrial loads. The behavior is analyzed considering the application of automation and control techniques, for the operational optimization of the system or its energy efficiency",
        automacaoPT: "Automação e Controle",
        automacaolEN: "Automation and Control",
        eficienciaPT: "Eficiência Energética",
        eficienciaEN: "Energy Efficiency",
        publicacoesPT: "Publicações",
        publicacoesEN: "Papers",

    }
    
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>{textos.lamotriz}</Heading>
                                <Subtitle >{!lang ? textos.descricaoLamotrizPT : textos.descricaoLamotrizEN}</Subtitle>
                                <BtnWrap>
                                    <Button to="/quem_somos" onClick={toggleHome}>{!lang ? "Saiba mais" : "More about"}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <ImgWrap to="/quem_somos" onClick={toggleHome}>
                                    <Img src={logo}/>
                            </ImgWrap>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>{!lang ? textos.automacaoPT : textos.automacaolEN}</Heading>
                                <BtnWrap>
                                    <Button to="/automacao_controle" onClick={toggleHome}>{!lang ? "Saiba mais" : "More about"}</Button>
                                </BtnWrap>
                                <ImgWrap to="/automacao_controle" onClick={toggleHome}>
                                    <Img src={control_img}/>
                                </ImgWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Heading>{!lang ? textos.eficienciaPT : textos.eficienciaEN}</Heading>
                                <BtnWrap>
                                    <Button to="/eficiencia_energetica" onClick={toggleHome}>{!lang ? "Saiba mais" : "More about"}</Button>
                                </BtnWrap>
                                <ImgWrap to="/eficiencia_energetica" onClick={toggleHome}>
                                    <Img src={eficiencia_img}/>
                                </ImgWrap>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>{!lang ? textos.publicacoesPT : textos.publicacoesEN}</Heading>
                                <BtnWrap>
                                    <Button to="/publicacoes" onClick={toggleHome}>{!lang ? "Saiba mais" : "More about"}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <ImgWrap to="/publicacoes" onClick={toggleHome}>
                                    <Img src={publicacoes_img}/>
                            </ImgWrap>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection