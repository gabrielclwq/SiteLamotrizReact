import React, { useState, useEffect } from 'react';
import {dataControle, textoControle, dataEficiencia, textoEficiencia} from "./Data"
import { TextContainer, TextWrapper, InfoRow, Column1, Column2, TextWrapperContent, Heading, Subtitle, ListWrapper, ListBox, ListDateWrap, ListDate, ListTitleWrap, ListTitle, ListIconWrap, Nav, NavbarContainer, NavItem, NavMenu, NavLinks} from './ControleElements';
import {HiOutlineLink} from 'react-icons/hi';
import BannerPage from '../../components/Pages/BannerPage';
import { animateScroll as scroll } from 'react-scroll';


const ControleSection = () => {
       
    const [stateC, setStateC] = useState({
        controle_automacao: dataControle
    });

    const [stateE, setStateE] = useState({
        eficiencia_energetica: dataEficiencia
    });

    const toggleHome = () => {
        scroll.scrollToTop({duration: 0});
    }

    return (
        <>
            <TextContainer>
                <Nav>
                    <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                        <NavLinks to="automacao" smooth={true} duration={500} spy={true} exact='true'>Controle e Automação</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="eficiencia" smooth={true} duration={500} spy={true} exact='true'>Eficiência Energética</NavLinks>
                        </NavItem>
                    </NavMenu>
                    </NavbarContainer>
                </Nav>
                <TextWrapperContent>
                    {/* <InfoRow> */}
                        <Column1 id="automacao">
                            <TextWrapper>
                                <Heading>{textoControle.headline}</Heading>
                                <Subtitle>{textoControle.subtitle1}</Subtitle>
                            </TextWrapper>
                            <ListWrapper>
                                {stateC.controle_automacao.map(item => (
                                <div key={item.id}>
                                    <ListBox to={item.url} onClick={toggleHome}>
                                            <ListTitleWrap>
                                                <ListTitle>{item.titulo}</ListTitle>
                                            </ListTitleWrap>
                                            <ListIconWrap>
                                                <HiOutlineLink />
                                            </ListIconWrap>
                                        </ListBox>
                                </div> 
                                ))}
                            </ListWrapper>
                        </Column1>
                        {/* <Column2 id="eficiencia">
                            <TextWrapper>
                                <Heading>{textoEficiencia.headline}</Heading>
                                <Subtitle>{textoEficiencia.subtitle1}</Subtitle>
                            </TextWrapper>
                            <ListWrapper>
                                {stateE.eficiencia_energetica.map(item => (
                                <div key={item.id}>
                                    <ListBox to={item.url} onClick={toggleHome}>
                                            <ListTitleWrap>
                                                <ListTitle>{item.titulo}</ListTitle>
                                            </ListTitleWrap>
                                            <ListIconWrap>
                                                <HiOutlineLink />
                                            </ListIconWrap>
                                        </ListBox>
                                </div> 
                                ))}
                            </ListWrapper>
                        </Column2> */}
                    {/* </InfoRow> */}
                </TextWrapperContent>
            </TextContainer>
        </>
    );
}

export default ControleSection

/* {state.controle_automacao.map(item => (
    <InfoContainer key={item.id}>
        <InfoWrapper>
            <InfoRow imgStart={item.id % 2 === 0 ? true : false }>
                <Column1>
                    <TextWrapper>
                        <Heading>{item.titulo}</Heading>
                        <Subtitle>{item.descricao}</Subtitle>
                        <BtnWrap>
                            <ButtonA href={item.url} target='_blank'>Saiba mais</ButtonA>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={item.img_url}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
))} */