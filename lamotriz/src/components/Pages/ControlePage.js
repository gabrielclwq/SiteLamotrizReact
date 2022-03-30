import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ControleSection from '../ControleSection';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Sidebar from '../Sidebar';
import Title from '../TitleSection';
import { animateScroll as scroll } from 'react-scroll'
import styled from "styled-components";

function ControlePage() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleAndScroll = () => {
        setIsOpen(!isOpen)
        scroll.scrollToTop()
    }

    const paginaAutomacao = {
        texto: "Linhas de pesquisa"
    }

    const paginaEficiencia = {
        texto: "Eficiência Energética"
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} toggleAndScroll={toggleAndScroll}/>
            <Navbar toggle={toggle} isOpen={isOpen} toggleAndScroll={toggleAndScroll}/>
            <Title {...paginaAutomacao}/>
            <ControleSection />
            <Footer />
        </>
    );
}

export default ControlePage;