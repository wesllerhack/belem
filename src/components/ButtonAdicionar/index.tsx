import React from 'react'

interface buttonProps {
  nome: string;
}
import { Container } from './styles';
const ButtonAdicionar = ({ nome }: buttonProps) => {
  return (
    <Container>
      <button>{nome}</button>
    </Container>
  )
}

export default ButtonAdicionar
