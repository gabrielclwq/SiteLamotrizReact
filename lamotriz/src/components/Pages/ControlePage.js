import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ControleSection from '../ControleSection';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Sidebar from '../Sidebar';
import Title from '../TitleSection';
import { animateScroll as scroll } from 'react-scroll'

function ControlePage() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleAndScroll = () => {
        setIsOpen(!isOpen)
        scroll.scrollToTop()
    }

    const pagina = {
        texto: "Automação e Controle"
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} toggleAndScroll={toggleAndScroll}/>
            <Navbar toggle={toggle} isOpen={isOpen} toggleAndScroll={toggleAndScroll}/>
            <Title {...pagina}/>
            <ControleSection />
            <Footer />
        </>
    );
}

export default ControlePage;