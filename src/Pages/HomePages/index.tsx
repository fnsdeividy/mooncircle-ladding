import NavBar from '../../Pages/NavBar'
import Footer from '../footer'
import Home from '../Home'
import Parcerias from '../Parcerias'
import SaibaMais from '../SaibaMais'
import { ContainerHomePages } from './styles'

const HomePages = () => {
  return (
    <ContainerHomePages>
      <NavBar />
      <Home />
      <SaibaMais />
      <Parcerias />
      <Footer />
    </ContainerHomePages>
  )
}

export default HomePages
