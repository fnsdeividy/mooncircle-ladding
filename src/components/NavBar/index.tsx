import React from "react";
import { AppContainer, LinksContainer, NavLink, NavMenu } from "./styles";
import Moon from '../../assets/MoonCircle.png'
import Logo from '../../assets/Logo.png'
const NavBar = () => {
  return (
    <AppContainer>
      <nav>
        <NavMenu>
            <img src={Moon} alt="" />
            <LinksContainer>
          <NavLink>
            <a className="Home" href="/">Home</a>
          </NavLink>
          <NavLink>
            <a className="saibamais" href="/saiba-mais">Saiba Mais</a>
          </NavLink>
          <NavLink>
            <a className="parcerias" href="/parcerias">Parcerias</a>
          </NavLink>
        </LinksContainer>
          <img src={Logo} alt="" />
        </NavMenu>
      </nav>
    </AppContainer>
  );
};

export default NavBar;
