import React from 'react'
import { FooterContainer } from './styles'
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai'
import MoonCircle from '../../assets/MoonCircle.png'
import Imagem1 from '../../assets/image 1.png'
import Imagem2 from '../../assets/image 2.png'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="FooterSectionOne">
        <img src={MoonCircle} alt="Footer-Imagem" />
        <p>Copyright &copy; 2023 </p>
        <p> 2023 Todos os direitos reservados</p>

        <div className="ContainerIMG">
          <AiOutlineInstagram className="img" />
          <AiOutlineTwitter className="img" />
          <AiFillYoutube className="img" />
        </div>
      </div>

      <div className="FooterSectionTwo">
        <h1 className="FooterTitleTwo">Páginas</h1>
        <a className="FooterLink" href="/">
          Home
        </a>
        <a className="FooterLink" href="/saiba-mais">
          Saiba Mais
        </a>
        <a className="FooterLink" href="/parcerias">
          Parcerias
        </a>
        <a className="FooterLink" href="#a">
          Blog
        </a>
      </div>

      <div className="FooterSectionTree">
        <h1 className="FooterTitleTree">Contato</h1>
        <p className="email">moon@mooncircle</p>
        <p className="number">(00)000000000</p>
      </div>

      <div className="FooterSectionFour">
        <h1 className="FooterTitleFour">Em breve para download:</h1>
        <div className="FooterImage">
          <img src={Imagem1} alt="Imagem 1" />
          <img src={Imagem2} alt="Imagem 2" />
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
