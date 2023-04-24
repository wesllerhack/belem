import React, { useContext, useEffect } from 'react'


import { CenterReportPage } from './CenterReportPage'
import { LeftMainPage } from '../LeftMainPage'

import { Container } from './styles'
import { InContext } from '../../../context/DataContext'
import { useAuth } from '../../../context/auth'
export const ReportDiarization = () => {
  const { user } = useAuth()
  const { setIsSelected, handleActualDate } = useContext(InContext);

  useEffect(() => {
    handleActualDate();
  }, [handleActualDate])

  if (!(user.id_nivel_permissao <= 2)) {
    setIsSelected(2)
  } else {
    setIsSelected(3)
  }
  return (
    <Container>
      <LeftMainPage />
      <CenterReportPage />
    </Container>
  )
}
