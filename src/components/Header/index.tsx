import React from "react";
import { AppContainer, Footer, HeaderComponent, MainContent, NavLink, NavMenu } from "./styles";
import Logo from '../../assets/Logo.png'
import MoonCircle from '../../assets/MoonCircle.png'

const Header: React.FC = () => {
    return (
      <AppContainer>
        <HeaderComponent>
          <NavMenu>
          <img className="Moon" src={MoonCircle} alt="" />
            <NavLink href="/">Home</NavLink>
            <NavLink href="/saiba-mais">Saiba Mais</NavLink>
            <NavLink href="/parcerias">Parcerias</NavLink>
            <img className="Logo" src={Logo} alt="" />
          </NavMenu>
        </HeaderComponent>
  
        <MainContent>
          {/* Conteúdo da página */}
        </MainContent>
  
        <Footer>
          {/* Conteúdo do rodapé */}
        </Footer>
      </AppContainer>
    );
  }
  
  export default Header;