import React from 'react';
import { AppContainer, NavMenu, NavLink, Image, ImageLogo } from './styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png';
import MoonCircle from '../../assets/MoonCircle.png';

export default function Header() {
  return (
    <AppContainer>
      <NavMenu>
        <Link className='Home' to="/">
          <Image className='Moon' src={MoonCircle} />
        </Link>
        <NavLink>
          <Link className='Home' to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link className='saibamais' to="/saiba-mais">Saiba Mais</Link>
        </NavLink>
        <NavLink>
          <Link className='parcerias' to="/parcerias">Parcerias</Link>
        </NavLink>
        <Link className='Logo' to="/">
          <ImageLogo src={Logo} />
        </Link>
      </NavMenu>
    </AppContainer>
  );
};
