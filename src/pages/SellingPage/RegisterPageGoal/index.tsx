import React, { useContext, useEffect } from 'react'


import { CenterRegisterPageGoal } from './CenterRegisterPageGoal'
import { LeftMainPage } from '../LeftMainPage'

import { Container } from './styles'
import { InContext } from '../../../context/DataContext'
export const RegisterPageGoal = () => {
  const { setIsSelected } = useContext(InContext);
  setIsSelected(2)
  return (
    <Container>
      <LeftMainPage />
      <CenterRegisterPageGoal />
    </Container>
  )
}
