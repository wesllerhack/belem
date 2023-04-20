import React, { useContext, useEffect } from 'react'


import { CenterRegisterUserPage } from './CenterRegisterUserPage'
import { LeftPage } from '../LeftMainPage'

import { Container } from './styles'
import { InContext } from '../../../context/DataContext'
export const RegisterUserPage = () => {
  const { setIsSelected } = useContext(InContext);
  setIsSelected(2)
  return (
    <Container>
      <LeftPage />
      <CenterRegisterUserPage />
    </Container>
  )
}
