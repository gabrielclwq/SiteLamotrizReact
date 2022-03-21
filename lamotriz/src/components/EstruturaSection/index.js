import React, {useState} from 'react'
import { EstruturaContainer, EstruturaRow, EstruturaWrapper, FeatureImagesBg, FeatureImg, TextWrapper, Heading, Subtitle, Column1, Column2, ImgWrap, Img } from './EstruturaElements'
import urlTanque from "../../images/tanque_img.jpg"
import urlEsteira from "../../images/esteira_img.jpg"
import urlBracoRobotico from "../../images/braco_robotico_img.jpg"
import urlCompressor from "../../images/compressor_img.jpg"
import urlMotores from "../../images/motores_img.jpg"
import urlVentAxial from "../../images/vent_axial_img.jpg"
import urlVentCent from "../../images/vent_cent_img.jpg"

const EstruturaSection = () => {

    const tanque = {
        Headline: "Sistema de reservatórios de líquidos",
        Description: "Esse sistema é utilizado para ensaios de controle de nível de líquido."
    } 

    const esteira = {
        Headline: "Sistema de esteiras transportadoras",
        Description: "Esse sistema é utilizado para ensaios de acionamento e controle de esteiras industriais."
    } 

    const bracoRobotico = {
        Headline: "Sistema de braço robótico",
        Description: "Esse sistema é utilizado para ensaios de acionamento e controle de esteiras industriais."
    }

    const compressor = {
        Headline: "Sistema de compressor",
        Description: "Esse sistema é utilizado para ensaios de acionamento e controle de compressores."
    }

    const motores = {
        Headline: "Sistema de reservatórios de motores",
        Description: "Esse sistema é utilizado para ensaios de controle e eficiência de motores."
    } 

    const ventAxial = {
        Headline: "Sistema de ventiladores axiais",
        Description: "Esse sistema é utilizado para ensaios de acionamento e controle de fluxo de ar usando ventiladores axiais."
    }

    const ventCent = {
        Headline: "Sistema de ventiladores centrifugos",
        Description: "Esse sistema é utilizado para ensaios de controle de fluxo de ar usando ventiladores centrífugos."
    }

    const [img, setImg] = useState(urlTanque);
    const [headline, setHeadline] = useState(tanque.Headline);
    const [description, setDescription] = useState(tanque.Description);
    const [activeTanque, setTanqueActive] = useState(true);
    const [activeEsteira, setEsteiraActive] = useState(false);
    const [activeBracoRobotico, setBracoRoboticoActive] = useState(false);
    const [activeCompressor, setCompressorActive] = useState(false);
    const [activeMotores, setMotoresActive] = useState(false);
    const [activeVentAxial, setVentAxialActive] = useState(false);
    const [activeVentCent, setVentCentActive] = useState(false);

    const onClick = (imgUrl, headlineSelect, descriptionSelect) => {
      setImg(imgUrl);
      setHeadline(headlineSelect);
      setDescription(descriptionSelect);
      
      if (imgUrl == urlTanque){
        setTanqueActive(true); setEsteiraActive(false); setCompressorActive(false); setMotoresActive(false); setVentAxialActive(false); setVentCentActive(false); setBracoRoboticoActive(false);
      }
      else if (imgUrl == urlEsteira){
        setTanqueActive(false); setEsteiraActive(true); setCompressorActive(false); setMotoresActive(false); setVentAxialActive(false); setVentCentActive(false); setBracoRoboticoActive(false);
      }
      else if (imgUrl == urlBracoRobotico){
        setTanqueActive(false); setEsteiraActive(false); setCompressorActive(false); setMotoresActive(false); setVentAxialActive(false); setVentCentActive(false); setBracoRoboticoActive(true);
      }
      else if (imgUrl == urlCompressor){
        setTanqueActive(false); setEsteiraActive(false); setCompressorActive(true); setMotoresActive(false); setVentAxialActive(false); setVentCentActive(false); setBracoRoboticoActive(false);
      }
      else if (imgUrl == urlMotores){
        setTanqueActive(false); setEsteiraActive(false); setCompressorActive(false); setMotoresActive(true); setVentAxialActive(false); setVentCentActive(false); setBracoRoboticoActive(false);
      }
      else if (imgUrl == urlVentAxial){
        setTanqueActive(false); setEsteiraActive(false); setCompressorActive(false); setMotoresActive(false); setVentAxialActive(true); setVentCentActive(false); setBracoRoboticoActive(false);
      }
      else if (imgUrl == urlVentCent){
        setTanqueActive(false); setEsteiraActive(false); setCompressorActive(false); setMotoresActive(false); setVentAxialActive(false); setVentCentActive(true); setBracoRoboticoActive(false);
      }
    }

    return (
        <>
            <EstruturaContainer id={"estrutura"}>
                <EstruturaWrapper>
                    <EstruturaRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <Heading>Estrutura</Heading>
                            </TextWrapper>
                            <FeatureImagesBg>
                                <FeatureImg id='tanque' src={urlTanque} onClick={() => onClick(urlTanque, tanque.Headline, tanque.Description)} active={activeTanque}></FeatureImg>
                                <FeatureImg id='esteira' src={urlEsteira} onClick={() => onClick(urlEsteira, esteira.Headline, esteira.Description)} active={activeEsteira}></FeatureImg>
                                <FeatureImg id='bracoRobotico' src={urlBracoRobotico} onClick={() => onClick(urlBracoRobotico, bracoRobotico.Headline, bracoRobotico.Description)} active={activeBracoRobotico}></FeatureImg>
                                <FeatureImg id='compressor' src={urlCompressor} onClick={() => onClick(urlCompressor, compressor.Headline, compressor.Description)} active={activeCompressor}></FeatureImg>
                                <FeatureImg id='motores' src={urlMotores} onClick={() => onClick(urlMotores, motores.Headline, motores.Description)} active={activeMotores}></FeatureImg>
                                <FeatureImg id='ventAxial' src={urlVentAxial} onClick={() => onClick(urlVentAxial, ventAxial.Headline, ventAxial.Description)} active={activeVentAxial}></FeatureImg>
                                <FeatureImg id='ventCent' src={urlVentCent} onClick={() => onClick(urlVentCent, ventCent.Headline, ventCent.Description)} active={activeVentCent}></FeatureImg>
                            </FeatureImagesBg>
                            <TextWrapper>
                                <Heading>{headline}</Heading>
                                <Subtitle>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    </EstruturaRow>
                </EstruturaWrapper>
            </EstruturaContainer>
        </>
    )
}

export default EstruturaSection