import React, { useState } from 'react'
import { Container, Math, Confirm } from './styles'
import ConfirmationButton from '../../components/Button'
import {Input, PhoneNumberInput} from '../../components/Input'
import LogoHome from '../../assets/LogoHome.png'
const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  function handleConfirm(): void {
    throw new Error('Function not implemented.')
  }


  const handleNameChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const handleWhatsappChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setWhatsapp(e.target.value);
  };

  return (
    <Container>
        <Math>
        <h1 >Bem-vinda ao Moon Circle.</h1>
        <h4 >O seu próximo match é aqui!</h4>
        <p >Segurança para viver e liberdade para ser. Mergulhe no Universo Moon Circle.
        Quer participar? Entre na fila de embarque
        </p>
        </Math>
        <Confirm>
          <img className='Logo-Home' src={LogoHome} alt="" />
        <Input  value={name} onChange={handleNameChange} placeholder="Digite seu nome"   />
        <Input  value={email} onChange={handleEmailChange} placeholder="Digite seu email"   />
        <PhoneNumberInput  value={whatsapp} onChange={handleWhatsappChange} placeholder="Digite seu número de WhatsApp"   />
        <ConfirmationButton  onConfirm={handleConfirm} text="Confirmar Inscrição" children={''} />
        </Confirm>
    </Container> 
  )
}

export default Home
