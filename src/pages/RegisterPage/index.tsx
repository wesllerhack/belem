import React from 'react'


import { CenterRegisterPage } from './CenterRegisterPage'
import { LeftMainPage } from '../components/LeftMainPage'

import { Container } from './styles'
export const RegisterPage = () => {
  return (
    <Container>
      <LeftMainPage />
      <CenterRegisterPage />
    </Container>
  )
}
