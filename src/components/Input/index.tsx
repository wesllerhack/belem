import React, { useContext, useRef, useState } from 'react'
import { InputHTMLAttributes } from 'react';

import { InContext } from '../../context/DataContext';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

import { Container } from './styles'
const Input: React.FC<inputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { digitado, setDigitado } = useContext(InContext);

  return (
    <Container>
      <label htmlFor={name}></label>
      <input
        required
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default Input
