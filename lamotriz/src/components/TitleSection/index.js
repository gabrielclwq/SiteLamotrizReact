import React, {useState} from 'react'
import WelcomeImg from "../../images/welcome_img.jpg"
import { TitleContainer, TitleBg, ImgBg, TitleContent, TitleH1, TitleP} from './TitleElements'
import {Button} from '../ButtonElements';
import Logo from "../../images/logo-lamotriz.png"

const Title = ({texto}) => {
  
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <TitleContainer>
        <TitleContent>
          <TitleH1>
            {texto}
          </TitleH1>
        </TitleContent>
    </TitleContainer>
  );
}

export default Title