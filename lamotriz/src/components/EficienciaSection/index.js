import React, { useState, useEffect } from 'react';
import {data} from "./Data"
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Button, Heading, Subtitle, BtnWrap, ImgWrap, Img, ButtonA} from './EficienciaElements';

const EficienciaSection = () => {
       
    const [state, setState] = useState({
        eficiencia_energetica: data
    });

    return (
        <>
            {state.eficiencia_energetica.map(item => (
                <InfoContainer key={item.id}>
                    <InfoWrapper>
                        <InfoRow imgStart={item.id % 2 == 0 ? true : false }>
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
            ))}
        </>
    );
}

export default EficienciaSection