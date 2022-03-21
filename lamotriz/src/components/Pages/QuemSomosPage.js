import React, { useState } from 'react';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../InfoSection/Data';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Sidebar from '../Sidebar';
import Title from '../TitleSection';
import EstruturaSection from '../EstruturaSection';
import { animateScroll as scroll } from 'react-scroll'
import TextSection from '../TextSection';

function QuemSomosPage() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleAndScroll = () => {
        setIsOpen(!isOpen)
        scroll.scrollToTop()
    }

    const pagina = {
        texto: "Quem somos"
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} toggleAndScroll={toggleAndScroll}/>
            <Navbar toggle={toggle} isOpen={isOpen} toggleAndScroll={toggleAndScroll}/>
            <Title {...pagina} />
            <TextSection />
            <Footer />
        </>
    );
}

export default QuemSomosPage;