import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextContainer, TextWrapper, TextWrapperContent, Heading, Subtitle, ListWrapper, ListBox, ListDateWrap, ListDate, ListTitleWrap, ListTitle, ListIconWrap} from './TextElements';
import {texto, pessoal, data} from './Data';
import {HiOutlineLink} from 'react-icons/hi'

const TextSection = () => {

    const [state, setState] = useState({
        pesquisadores: data
    });

    return (
        <>
            <TextContainer>
                <TextWrapperContent>
                    <TextWrapper>
                        <Heading>{texto.headline}</Heading>
                        <Subtitle>{texto.subtitle1}</Subtitle>
                        <Subtitle>{texto.subtitle2}</Subtitle>
                        <Subtitle>{texto.subtitle3}</Subtitle>
                        <Heading>Pessoal</Heading>
                    </TextWrapper>
                    <ListWrapper>
                        {state.pesquisadores.map(item => (
                        <div key={item.id}>
                            <ListBox href={item.url} target='_blank'>
                                    <ListDateWrap>
                                        <ListDate>{item.posicao}</ListDate>
                                    </ListDateWrap>
                                    <ListTitleWrap>
                                        <ListTitle>{item.nome}</ListTitle>
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

export default TextSection