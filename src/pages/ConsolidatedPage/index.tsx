import React from 'react'

import CenterMainPage from './CenterMainPage'
import RightMainPage from './RightMainPage'
import LeftMainPage from './LeftMainPage'

import { Container } from './styles'
const ConsolidatedPage = () => {
  return (
    <Container>
      <LeftMainPage />
      <CenterMainPage />
      <RightMainPage />
    </Container>
  )
}

export default ConsolidatedPage;
