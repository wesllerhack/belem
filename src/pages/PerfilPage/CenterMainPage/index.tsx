import React, { useContext, useEffect } from 'react'

import { Perfil } from '../Perfil';
import { Container } from './styles';
import { InContext } from '../../../context/DataContext';
export const CenterMainPage = () => {
  const { verifyAnimation, setVerifyAnimation } = useContext(InContext);

  useEffect(() => {
    if (verifyAnimation === false) {
      setVerifyAnimation(true)
    }
  }, [])

  return (
    <Container>
      <h1>Perfil</h1>
      <Perfil />
    </Container>
  );
};
