import React from 'react'


import CenterRegisterPage from './CenterRegisterPage'
import RightMainPage from './RightRegisterPage'
import LeftMainPage from './LeftMainPage'

import { Container } from './styles'
const RegisterPage = () => {
  return (
    <Container>
      <LeftMainPage />
      <CenterRegisterPage />
      <RightMainPage />
    </Container>
  )
}

export default RegisterPage
