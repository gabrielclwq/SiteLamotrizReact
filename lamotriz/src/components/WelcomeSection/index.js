import React, {useState} from 'react'
import WelcomeImg from "../../images/welcome_img.svg"
import { WelcomeContainer, WelcomeBg, ImgBg, WelcomeContent, WelcomeH1, WelcomeP, WelcomeBtnWrapper, ArrowForward, ArrowRight, Img } from './WelcomeElements'
import {Button} from '../ButtonElements';
import Logo from "../../images/logo-lamotriz.png"


const WelcomeSection = () => {
  
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <WelcomeContainer id='welcome'>
        {/* <WelcomeBg>
            <ImgBg src={WelcomeImg} />
        </WelcomeBg> */}
        <WelcomeContent>
          <WelcomeH1>
            LAMOTRIZ
          </WelcomeH1>
          <WelcomeP>
            Laboratório de Sistemas Motrizes
          </WelcomeP>
          {/* <WelcomeBtnWrapper>
            <Button to='contato' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Entre em contato {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </WelcomeBtnWrapper> */}
        </WelcomeContent>
    </WelcomeContainer>
  );
}

export default WelcomeSection