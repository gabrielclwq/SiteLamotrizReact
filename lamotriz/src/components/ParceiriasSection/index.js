import React, {useState} from 'react'
import { EstruturaContainer, EstruturaWrapper, FeatureImagesBg, FeatureImg, TextWrapper, Heading} from './ParceiriasElements'
import urlUfc from "../../images/ufc.png"
import urlConcema from "../../images/concema.png"
import urlEletrobras from "../../images/eletrobras.jpg"
import urlPPGEE from "../../images/logo-PPGEE.jpg"
import urlEnel from "../../images/logo_enel.png"
import urlVentAxial from "../../images/vent_axial_img.jpg"
import urlVentCent from "../../images/vent_cent_img.jpg"

const ParceiriasSection = () => {
    return (
        <>
            <EstruturaContainer id={"parcerias"}>
                <EstruturaWrapper>
                    <TextWrapper>
                        <Heading>Parcerias</Heading>
                    </TextWrapper>
                    <FeatureImagesBg>
                        {/* <FeatureImg id='ufc' src={urlUfc}></FeatureImg>
                        <FeatureImg id='eletrobras' src={urlEletrobras}></FeatureImg> */}
                        <FeatureImg id='ppgee' src={urlPPGEE}></FeatureImg>
                        {/* <FeatureImg id='enel' src={urlEnel}></FeatureImg> */}
                    </FeatureImagesBg>
                </EstruturaWrapper>
            </EstruturaContainer>
        </>
    )
}

export default ParceiriasSection