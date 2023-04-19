import React from 'react'


import { CenterReportPage } from './CenterReportPage'
import { LeftMainPage } from '../LeftMainPage'

import { Container } from './styles'
export const ReportDiarization = () => {
  return (
    <Container>
      <LeftMainPage />
      <CenterReportPage />
    </Container>
  )
}
