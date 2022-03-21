import React from 'react'
import { Img, Icon, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinkA, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {FaFacebook} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import logo from "../../images/logo-lamotriz.png"
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop({duration: 0});
      }  

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lamotriz</FooterLinkTitle>
                                <FooterLink to="/" onClick={toggleHome}>Página Inicial</FooterLink>
                                <FooterLink to="/quem_somos" onClick={toggleHome}>Quem Somos</FooterLink>
                                <FooterLink to="/automacao_controle" onClick={toggleHome}>Automação e Controle</FooterLink>
                                <FooterLink to="/eficiencia_energetica" onClick={toggleHome}>Eficiência Energética</FooterLink>
                                <FooterLink to="/publicacoes" onClick={toggleHome}>Publicações</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLinkA href="https://www.google.com/maps/place/LAMOTRIZ/@-3.7454393,-38.5807478,17z/data=!3m1!4b1!4m5!3m4!1s0x7c74b66b294c617:0xdde407859e9f33fe!8m2!3d-3.7454431!4d-38.5792002" target="_blank">
                                    <Icon><HiOutlineLocationMarker /></Icon> LAMOTRIZ, Bloco 732, Campus do Pici - Pici, Fortaleza - CE, 60020-181
                                </FooterLinkA>
                                <FooterLinkA>
                                    <Icon><HiOutlinePhone/></Icon> +555 85 33669579
                                </FooterLinkA>
                                <FooterLinkA>
                                <Icon><HiOutlineMail/></Icon> lamotriz@dee.ufc.br
                                </FooterLinkA>
                                <FooterLink ></FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <Img src={logo} alt='logo'/>
                        </SocialLogo>
                        <WebsiteRights>Lamotriz © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                {/* <FaFacebook /> */}
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer