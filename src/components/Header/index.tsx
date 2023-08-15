import React from 'react';
import { AppContainer, HeaderComponent, NavLink, NavMenu } from './styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png';
import MoonCircle from '../../assets/MoonCircle.png';

export default function Header() {
  return (
    <AppContainer>
      <HeaderComponent>
        <NavMenu>
          <img className='Moon' src={MoonCircle} alt='' />
          <NavLink>
          <Link className='Home' to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link className='saiba-mais' to="/saiba-mais">Saiba Mais</Link>
        </NavLink>
        <NavLink>
          <Link className='parcerias' to="/parcerias">Parcerias</Link>
        </NavLink>
          <img className='Logo' src={Logo} alt='' />
        </NavMenu>
      </HeaderComponent>
    </AppContainer>
  );
};


