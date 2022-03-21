import React, {useEffect, useState} from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { ListContainer, ListWrapper, ListHeadline, ListBox, ListDateWrap, ListDate, ListTitleWrap, ListTitle, ListIconWrap, Nav, NavbarContainer, NavItem, NavMenu, NavLinks} from "./ListElements"
import {teses_data, dissetacoes_data, artigos_data} from './Data';

function List() {

    const [state, setState] = useState({
        teses: teses_data,
        dissetacoes: dissetacoes_data,
        artigos: artigos_data,
    });

    return (
        <>
            <ListContainer>
                <Nav>
                    <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                        <NavLinks to="doutorado" smooth={true} duration={500} spy={true} exact='true'>Teses de Doutorado</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="mestrado" smooth={true} duration={500} spy={true} exact='true'>Dissertações de Mestrado</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="artigos" smooth={true} duration={500} spy={true} exact='true'>Artigos</NavLinks>
                        </NavItem>
                    </NavMenu>
                    </NavbarContainer>
                </Nav>
                <ListWrapper>
                    <ListHeadline id="doutorado">Teses de Doutorado</ListHeadline>
                    {state.teses.map(item => (
                        <div key={item.id}>
                            <ListBox href={item.url} target='_blank'>
                                <ListDateWrap>
                                    <ListDate>{item.data}</ListDate>
                                </ListDateWrap>
                                <ListTitleWrap>
                                    <ListTitle>{item.titulo}</ListTitle>
                                </ListTitleWrap>
                                <ListIconWrap>
                                    <HiOutlineExternalLink />
                                </ListIconWrap>
                            </ListBox>
                        </div> 
                    ))}
                    <ListHeadline id="mestrado">Dissertações de Mestrado</ListHeadline>
                    {state.dissetacoes.map(item => (
                        <div key={item.id}>
                            <ListBox href={item.url} target='_blank'>
                                <ListDateWrap>
                                    <ListDate>{item.data}</ListDate>
                                </ListDateWrap>
                                <ListTitleWrap>
                                    <ListTitle>{item.titulo}</ListTitle>
                                </ListTitleWrap>
                                <ListIconWrap>
                                    <HiOutlineExternalLink />
                                </ListIconWrap>
                            </ListBox>
                        </div> 
                    ))}
                    <ListHeadline id="artigos">Artigos</ListHeadline>
                    {state.artigos.map(item => (
                        <div key={item.id}>
                            <ListBox href={item.url} target='_blank'>
                                <ListDateWrap>
                                    <ListDate>{item.data}</ListDate>
                                </ListDateWrap>
                                <ListTitleWrap>
                                    <ListTitle>{item.titulo}</ListTitle>
                                </ListTitleWrap>
                                <ListIconWrap>
                                    <HiOutlineExternalLink />
                                </ListIconWrap>
                            </ListBox>
                        </div> 
                    ))}
                </ListWrapper>
            </ListContainer>
        </>
    )
}

export default List