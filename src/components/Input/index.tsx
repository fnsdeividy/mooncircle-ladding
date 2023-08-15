import React, { ChangeEvent } from 'react';
import { StyledInput, StyledInputWrapper } from './styles';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
  <StyledInputWrapper>
   
    <StyledInput
      type="text"
      id={placeholder}
      name={placeholder}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
    />
  </StyledInputWrapper>
);

interface PhoneNumberInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}



const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ''); 
    onChange({ ...e, target: { ...e.target, value: inputValue } });
  };

  return (
    <StyledInputWrapper>
      <StyledInput
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
  );
};



export { Input , PhoneNumberInput};
