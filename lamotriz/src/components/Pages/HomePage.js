import React, { useState } from 'react';
import InfoSection from '../InfoSection';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Sidebar from '../Sidebar';
import EstruturaSection from '../EstruturaSection';
import { animateScroll as scroll } from 'react-scroll'
import ParceiriasSection from '../ParceiriasSection';

function HomePage() {

    const [isOpen, setIsOpen] = useState(false)
    const [langEN, setLang] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const LangPT = () => {
        setLang(false)
    }

    const LangEN = () => {
        setLang(true)
    }

    const toggleAndScroll = () => {
        setIsOpen(!isOpen)
        scroll.scrollToTop()
    }
    

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} toggleAndScroll={toggleAndScroll}/>
            <Navbar toggle={toggle} isOpen={isOpen} langPT={LangPT} langEN={LangEN} toggleAndScroll={toggleAndScroll}/>
            <InfoSection lang={langEN}/>
            {/* <EstruturaSection /> */}
            <ParceiriasSection />
            <Footer />
        </>
    );
}

export default HomePage;