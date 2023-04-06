import React, { useContext, useEffect } from 'react'

import { AddCardCampoResultado } from '../../../components/RegisterComponents/AddCardCampoResultado'
import { CardCampoResultados2 } from '../../../components/RegisterComponents/CardCampoResultadoTeste';
import { InContext } from '../../../context/DataContext';


import { Container } from './styles';
export const CenterRegisterPage = () => {
  const { verifyAnimation, setVerifyAnimation } = useContext(InContext);

  useEffect(() => {
    if (verifyAnimation === true) {
      const timer = setTimeout(() => {
        setVerifyAnimation(false)
      }, 1000);
    }
  }, [])

  return (
    <Container verify={verifyAnimation}>
      <AddCardCampoResultado />
      <CardCampoResultados2 />
    </Container>
  );
};
