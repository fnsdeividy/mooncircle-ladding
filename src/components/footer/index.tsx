import React from 'react';
import { FooterContainer, FooterImage, FooterLink, FooterSection, FooterTitle } from './styles';
import {AiOutlineInstagram, AiFillYoutube,  AiOutlineTwitter} from 'react-icons/ai'
import MoonCircle from '../../assets/MoonCircle.png'
import Imagem1 from '../../assets/image 1.png'
import Imagem2 from '../../assets/image 2.png'

const Footer = () => {
  return (
    <FooterContainer>
    <FooterSection>
      <img src={MoonCircle} alt="Footer-Imagem" />
      <p>Copyright &copy; 2023  </p>
      <p> 2023 Todos os direitos reservados</p>

      <div className='ContainerIMG'>
        <AiOutlineInstagram className='img'/>
        <AiOutlineTwitter className='img'/>
        <AiFillYoutube className='img'/>
      </div>
    </FooterSection>
    
    <FooterSection>
      <FooterTitle>Páginas</FooterTitle>
      <FooterLink href="/">Home</FooterLink>
      <FooterLink href="/saiba-mais">Saiba Mais</FooterLink>
      <FooterLink href="/parcerias">Parcerias</FooterLink>
      <FooterLink href="#a">Blog</FooterLink>
    </FooterSection>

    <FooterSection>
      <FooterTitle>Contato</FooterTitle>
      <p>moon@mooncircle</p>
      <p>(00)000000000</p>
    </FooterSection>
    
    <FooterSection>
      <FooterTitle>Em breve para download:</FooterTitle>
      <FooterImage src={Imagem1} alt="Imagem 1" />
      <FooterImage src={Imagem2} alt="Imagem 2" />
    </FooterSection>
  </FooterContainer>
  );
};

export default Footer;
