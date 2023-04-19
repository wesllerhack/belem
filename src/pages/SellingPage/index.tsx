import React from 'react'

import { CenterMainPage } from './CenterMainPage'
import { LeftMainPage } from './LeftMainPage'

import { Container } from './styles'
export const SellingPage = () => {
  return (
    <Container>
      <LeftMainPage />
      <CenterMainPage />
    </Container>
  )
}
