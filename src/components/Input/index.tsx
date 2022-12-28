import React, { useContext, useState } from 'react'

import { InContext } from '../../context/DataContext';

interface inputProps {
  name: string;
  value: string;
}

import { Container } from './styles'
const Input = ({ name, value }: inputProps) => {
  const { digitado, setDigitado } = useContext(InContext);

  return (
    <Container>
      <label htmlFor={name}></label>
      <input
        onChange={(event) => setDigitado(event.target.value)}
        placeholder={name}
        required
      />
    </Container>
  )
}

export default Input
