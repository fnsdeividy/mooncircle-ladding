import React from 'react'
import { ButtonComponent } from './styles'

interface IButtonProps {
  text?: string
  confirmText?: string
}

export const Button: React.FC<IButtonProps> = ({
  text,
  confirmText,
}: IButtonProps) => {
  return (
    <ButtonComponent>
      {text}
      <p className="confirm">{confirmText}</p>
    </ButtonComponent>
  )
}
