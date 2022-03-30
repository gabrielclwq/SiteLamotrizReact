import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
    SidebarBlock
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle, toggleAndScroll }) => {
    return (
        <SidebarBlock isOpen={isOpen} onClick={toggle}> 
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/" onClick={toggleAndScroll}>
                            Página Inicial
                        </SidebarLink>
                        <SidebarLink to="/quem_somos" onClick={toggleAndScroll}>
                            Quem Somos
                        </SidebarLink>
                        {/* <SidebarLink to="/automacao_controle" onClick={toggleAndScroll}>
                            Automação e Controle
                        </SidebarLink> */}
                        <SidebarLink to="/linhas_pesquisa" onClick={toggleAndScroll}>
                            Linhas de pesquisa
                        </SidebarLink>
                        {/* <SidebarLink to="/eficiencia_energetica" onClick={toggleAndScroll}>
                            Eficiência Energética
                        </SidebarLink> */}
                        <SidebarLink to="/publicacoes" onClick={toggleAndScroll}>
                            Publicações
                        </SidebarLink>
                        {/* <SidebarLink to="parceiros" onClick={toggle} smooth={true} duration={500} spy={true} exact='true'>
                            Parceiros
                        </SidebarLink> */}
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </SidebarBlock> 
    );
}

export default Sidebar