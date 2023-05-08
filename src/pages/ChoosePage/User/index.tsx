import React, { useContext, useEffect } from 'react'


import { CenterUserPage } from './CenterUserPage'
import { LeftPage } from '../LeftMainPage'

import { Container } from './styles'
import { InContext } from '../../../context/DataContext'
export const UserPage = () => {
  const { setIsSelected } = useContext(InContext);
  setIsSelected(2)
  return (
    <Container>
      <LeftPage />
      <CenterUserPage />
    </Container>
  )
}
