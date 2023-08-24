import React, { FunctionComponent } from 'react'
import {
  AppContainer,
  LinksContainer,
  LogoImage,
  MoonImage,
  NavLink,
  NavMenu,
} from './styles'
import Moon from '../../assets/MoonCircle.png'
import Logo from '../../assets/Logo.png'

interface NavBarProps {
  scrollToSection: (sectionId: string) => void
}

const NavBar: FunctionComponent<NavBarProps> = ({ scrollToSection }) => {
  return (
    <AppContainer>
      <nav>
        <NavMenu>
          <MoonImage src={Moon} alt="Moon" />
          <LinksContainer>
            <NavLink>
              <button onClick={() => scrollToSection('home')}>
                <p className="Home">Home</p>
              </button>
              <button onClick={() => scrollToSection('saiba-mais')}>
                <p className="SaibaMais">Saiba Mais</p>
              </button>
              <button onClick={() => scrollToSection('parcerias')}>
                <p className="parcerias">parcerias</p>
              </button>
            </NavLink>
          </LinksContainer>
          <LogoImage src={Logo} alt="Logo" />
        </NavMenu>
      </nav>
    </AppContainer>
  )
}

export default NavBar
