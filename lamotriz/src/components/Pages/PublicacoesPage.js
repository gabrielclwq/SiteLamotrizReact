import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Sidebar from '../Sidebar';
import Title from '../TitleSection';
import List from '../ListSection';
import { animateScroll as scroll } from 'react-scroll'

function PublicacoesPage() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleAndScroll = () => {
        setIsOpen(!isOpen)
        scroll.scrollToTop()
    }

    const pagina = {
        texto: "Publicações"
    }

    const myExample = () => {
        let myArray = []
        for(let i = 0; i<5;i++) {
            myArray.push(<Title {...pagina} />)
        }
        return myArray
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} toggleAndScroll={toggleAndScroll}/>
            <Navbar toggle={toggle} isOpen={isOpen} toggleAndScroll={toggleAndScroll}/>
            <Title {...pagina} />
            <List />
            <Footer />
        </>
    );
}

export default PublicacoesPage;