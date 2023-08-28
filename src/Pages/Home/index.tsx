import React, { useState } from 'react'
import { Container } from './styles'

import { Input, PhoneNumberInput } from '../../components/Input'
import LogoHome from '../../assets/LogoHome.png'
import { Button } from '../../components/Button'

interface propsHome {
  id?: string
}

const Home = ({ id }: propsHome) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')

  const handleNameChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setEmail(e.target.value)
  }

  const handleWhatsappChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setWhatsapp(e.target.value)
  }

  return (
    <Container>
      <div id={id} className="Math">
        <h1>Bem-vinda ao Moon Circle.</h1>
        <h4>O seu próximo match é aqui!</h4>
        <p>
          Segurança para viver e liberdade para ser. Mergulhe no Universo Moon
          Circle. Quer participar? Entre na fila de embarque
        </p>
      </div>
      <div className="Input">
        <Input
          value={name}
          onChange={handleNameChange}
          placeholder="Digite seu nome"
        />
        <Input
          value={email}
          onChange={handleEmailChange}
          placeholder="Digite seu email"
        />
        <PhoneNumberInput
          value={whatsapp}
          onChange={handleWhatsappChange}
          placeholder="Digite seu número de WhatsApp"
        />
      </div>
      <div className="Confirm">
        <div className="ContainerButton">
          <Button confirmText="Confirmar inscrição" />
        </div>
      </div>
      <img className="Logo-Home" src={LogoHome} alt="" />
    </Container>
  )
}

export default Home
