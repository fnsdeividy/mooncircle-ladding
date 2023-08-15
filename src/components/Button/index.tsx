import React, { useState } from 'react';
import { Container } from './styles';

interface ConfirmationButtonProps {
  onConfirm: () => void;
  text: string;
  children: string;
}

export default function ConfirmationButton({ onConfirm, text, children }: ConfirmationButtonProps)  {
  const [confirming, setConfirming] = useState(false);

  const handleClick = () => {
    if (confirming) {
      onConfirm();
    } else {
      setConfirming(true);
    }
  };

  return (
    <Container>
    <button onClick={handleClick}>
      {confirming ? 'Tem certeza?' : text}
    </button>
    </Container>
  );
};


