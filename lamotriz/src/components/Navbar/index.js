import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, LangIcon, Img, } from './NavbarElements'
import Logo from "../../images/logo-lamotriz.png"
import { animateScroll as scroll } from 'react-scroll'
import br from "../../images/brazil_flags_flag_16979.ico"
import eu from "../../images/united_states_flags_flag_17080.ico"

const Navbar = (props) => {

  const [scrollNav, setScrollNav] = useState(false)

  console.log(props.isOpen);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const icon = () => {
    if (scrollNav == false) {
      return (<LangIcon><Img src={br} onClick={props.langPT}/><Img src={eu} onClick={props.langEN}/></LangIcon>)
    } else {
      return(<NavLogo onClick={toggleHome}><Img src={Logo}/></NavLogo>)
    }
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <MobileIcon onClick={props.toggle} isOpen={props.isOpen}>
            <FaBars /> Menu
          </MobileIcon>
          <NavLogo onClick={toggleHome}><Img src={Logo}/></NavLogo>
          {/* {icon()} */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
