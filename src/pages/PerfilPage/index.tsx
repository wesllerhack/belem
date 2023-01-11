import React from 'react'

import CenterMainPage from './CenterMainPage'
import RightMainPage from './RightMainPage'
import LeftMainPage from './LeftMainPage'

import { Container } from './styles'
const PerfilPage = () => {
  return (
    <Container>
      <LeftMainPage />
      <CenterMainPage />
      <RightMainPage />
    </Container>
  )
}

export default PerfilPage;
