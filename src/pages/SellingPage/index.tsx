import React from 'react'

import { CenterMainPage } from './CenterMainPage'
import { RightMainPage } from './RightMainPage'
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
