import Home from '../Home'
import Parcerias from '../Parcerias'
import SaibaMais from '../SaibaMais'
import { ContainerHomePages } from './styles'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



const HomePages = () => {
  return (

    <>
      <Home />
      <SaibaMais />
      <Parcerias />
    </>

  )
}

export default HomePages