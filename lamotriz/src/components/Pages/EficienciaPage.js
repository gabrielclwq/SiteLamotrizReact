import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Sidebar from '../Sidebar';
import Title from '../TitleSection';
import EficienciaSection from '../EficienciaSection';
import { animateScroll as scroll } from 'react-scroll'

function EficienciaPage() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleAndScroll = () => {
        setIsOpen(!isOpen)
        scroll.scrollToTop()
    }

    const pagina = {
        texto: "Eficiência Energética"
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} toggleAndScroll={toggleAndScroll}/>
            <Navbar toggle={toggle} isOpen={isOpen} toggleAndScroll={toggleAndScroll}/>
            <Title {...pagina} />
            <EficienciaSection />
            <Footer />
        </>
    );
}

export default EficienciaPage;