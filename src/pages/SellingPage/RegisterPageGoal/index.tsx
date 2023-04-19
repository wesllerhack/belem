import React from 'react'


import { CenterRegisterPageGoal } from './CenterRegisterPageGoal'
import { LeftMainPage } from '../LeftMainPage'

import { Container } from './styles'
export const RegisterPageGoal = () => {
  return (
    <Container>
      <LeftMainPage />
      <CenterRegisterPageGoal />
    </Container>
  )
}
