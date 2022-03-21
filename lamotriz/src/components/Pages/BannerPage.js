import {React, useState} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer'
import Sidebar from '../Sidebar';
import Banner from '../BannerSection'
import { animateScroll as scroll } from 'react-scroll'

const BannerPage = ({item}) => {

const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleAndScroll = () => {
        setIsOpen(!isOpen)
        scroll.scrollToTop()
    }

    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} toggleAndScroll={toggleAndScroll}/>
        <Navbar toggle={toggle} isOpen={isOpen} toggleAndScroll={toggleAndScroll}/>
        <Banner item={item}/>
        <Footer />
    </>
    )
}

export default BannerPage