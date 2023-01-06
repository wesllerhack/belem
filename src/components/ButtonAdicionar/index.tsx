import React from 'react'

interface buttonProps {
  nome: string;
  disabled: any;
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
