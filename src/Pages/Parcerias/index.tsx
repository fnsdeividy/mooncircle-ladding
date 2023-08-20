import React from 'react'
import Haya from '../../assets/Ellipse 6.png'
import Camara from '../../assets/Frame 64.png'
import Bold from '../../assets/Ellipse 8.png'
import Castro from '../../assets/Ellipse 9.png'
import { ContainerParcerias } from './styles'

const Parcerias = () => {
  return (
    <ContainerParcerias>
      <div className='ContainerText'>
        <h1 className='TextParceiros'>Nossos Parceiros</h1>
        <p className='TextP'>Trabalhamos juntos para acolher todas de maneira segura.</p>
      </div>
      <div className='ContainerImages'>
      <img className='Image1' src={Haya} alt="" />
      <img className='Image2' src={Camara} alt="" />
      <img className='Image3' src={Bold} alt="" />
      <img className='Image4' src={Castro} alt="" />
      </div>
      <div className='ContainerText'>
      <h1>A construção do nosso universo precisa da sua ajuda!</h1>
      <p>Indique aqui um estabelecimento para fazer parte do Moon Circle. Pode ser bar, restaurante, hotel, balada, companhia aérea, entre outros!
        Lembrando que para fazer parte da nossa tripulação, o local precisa ser livre de qualquer tipo de preconceito.
      </p>
      </div>
      <div className='ContainerInput'>
      <input />
      <input />
      <button />
      <h3>Quer ser nosso parceiro?</h3>
      <p>Envie um e-mail para moon@mooncircle.app </p>
      </div>
    </ContainerParcerias>
  )
}

export default Parcerias
