import React from 'react'

interface buttonProps {
  nome: string;
  disabled: Boolean | undefined;
}
import { Container } from './styles';
const ButtonAdicionar = ({ nome, disabled }: buttonProps) => {
  return (
    <Container>
      <button disabled={disabled}>{nome}</button>
    </Container>
  )
}

export default ButtonAdicionar
