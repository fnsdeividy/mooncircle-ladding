import React from 'react'
import NavBar from '../../Pages/NavBar'
import Footer from '../footer'
import Home from '../Home'
import Parcerias from '../Parcerias'
import SaibaMais from '../SaibaMais'
import { ContainerHomePages } from './styles'

const HomePages = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ContainerHomePages>
      <NavBar scrollToSection={scrollToSection} />
      <Home id="home" />
      <SaibaMais id="saiba-mais" />
      <Parcerias id="parcerias" />
      <Footer />
    </ContainerHomePages>
  )
}

export default HomePages
