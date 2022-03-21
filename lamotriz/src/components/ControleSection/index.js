import React, { useState, useEffect } from 'react';
import {data, texto} from "./Data"
import { TextContainer, TextWrapper, TextWrapperContent, Heading, Subtitle, ListWrapper, ListBox, ListDateWrap, ListDate, ListTitleWrap, ListTitle, ListIconWrap} from './ControleElements';
import {HiOutlineLink} from 'react-icons/hi';
import BannerPage from '../../components/Pages/BannerPage';
import { animateScroll as scroll } from 'react-scroll';


const ControleSection = () => {
       
    const [state, setState] = useState({
        controle_automacao: data
    });

    const toggleHome = () => {
        scroll.scrollToTop({duration: 0});
    }

    return (
        <>
            <TextContainer>
                <TextWrapperContent>
                    <TextWrapper>
                        <Heading>{texto.headline}</Heading>
                        <Subtitle>{texto.subtitle1}</Subtitle>
                        <Heading>Pesquisas</Heading>
                    </TextWrapper>
                    <ListWrapper>
                        {state.controle_automacao.map(item => (
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