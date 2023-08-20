import React from 'react';
import { FooterContaier } from './styles';
import {AiOutlineInstagram, AiFillYoutube, AiOutlineCopyright, AiOutlineTwitter} from 'react-icons/ai'
import MoonCircle from '../../assets/MoonCircle.png'
import Imagem1 from '../../assets/image 1.png'
import Imagem2 from '../../assets/image 2.png'

const Footer = () => {
  return (
    <FooterContaier>
      <div className='Footer-moon'>
      <img  src={MoonCircle} alt="Footer-Imagem" />
      <p className='copyright'>Copyright<AiOutlineCopyright/>2023</p>
      <p className='direitos'>Todos os direitos reservados</p>
        <AiOutlineInstagram className='instagram'/>
       <AiOutlineTwitter className='twitter'/>
       <AiFillYoutube className='youtube'/>
      </div>
      
      <div className="pages">
        <h1 className='paginas'>Páginas</h1>
        <p className='paginas-home'>Home</p>
        <p className='paginas-Saiba-mais'>Saiba mais</p>
        <p className='paginas-Parceiros'>Parceiros</p>
        <p className='paginas-Blog'>Blog</p>
      </div>

      <div className="contato">
        <h1 className='contato-h1'>Contato</h1>
        <p className='email'>moon@mooncircle</p>
        <p className='telefone'>(00)000000000</p>
      </div>
      
      <div className="outras-imagens">
        <h1 className='download'>Em breve para download:</h1>
        <div className='images'>
        <img className='image-1' src={Imagem1} alt="Imagem 1" />
        <img className='image-2' src={Imagem2} alt="Imagem 2" />
        </div>
      </div>
    </FooterContaier>
  );
};

export default Footer;
