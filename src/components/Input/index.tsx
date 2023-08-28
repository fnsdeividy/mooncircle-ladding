import React, { ChangeEvent } from 'react'
import { InputComponent, StyledInputWrapper } from './styles'

interface InputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
  <StyledInputWrapper>
    <InputComponent
      type="text"
      id={placeholder}
      name={placeholder}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
    />
  </StyledInputWrapper>
)

interface PhoneNumberInputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '')
    onChange({ ...e, target: { ...e.target, value: inputValue } })
  }

  return (
    <StyledInputWrapper>
      <InputComponent
        type="tel"
        id="phone"
        name="phone"
        value={value}
        onChange={handleInputChange}
        required
        placeholder="Número de Celular"
        pattern="[0-9]{10,15}"
      />
    </StyledInputWrapper>
  )
}

interface InputEstaProps {
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

const InputNomeEstabelecimento: React.FC<InputEstaProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  return (
    <StyledInputWrapper>
      <InputComponent
        type="text"
        value={value}
        id="nomeEstabelecimento"
        placeholder="Nome do estabelecimento"
        onChange={onChange}
      />
    </StyledInputWrapper>
  )
}

interface PropsInput {
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

const InputNomeInstagram: React.FC<PropsInput> = ({
  placeholder,
  onChange,
}) => {
  return (
    <StyledInputWrapper>
      <InputComponent
        type="text"
        id="nomeInstagram"
        placeholder="Instagram"
        onChange={onChange}
      />
    </StyledInputWrapper>
  )
}

export { Input, PhoneNumberInput, InputNomeEstabelecimento, InputNomeInstagram }
