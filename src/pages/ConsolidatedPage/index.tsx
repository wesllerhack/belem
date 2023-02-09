import React from 'react'

import { CenterMainPage } from './CenterMainPage'
import { RightMainPage } from './RightMainPage'
import { LeftMainPage } from '../components/LeftMainPage'

import { Container } from './styles'
export const ConsolidatedPage = () => {
  return (
    <Container>
      <LeftMainPage />
      <CenterMainPage />
      <RightMainPage />
    </Container>
  )
}
