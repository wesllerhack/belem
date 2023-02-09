import React, { useContext, useRef } from 'react'
import { InputHTMLAttributes } from 'react';


interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

import { Container } from './styles'

export const Input: React.FC<inputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <label htmlFor={name} />
      <input
        maxLength={100}
        required
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

