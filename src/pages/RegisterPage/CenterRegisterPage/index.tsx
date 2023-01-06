import React, { useContext, useEffect } from 'react'

import AddCardCampoResultado from '../../../components/RegisterComponents/AddCardCampoResultado'
import CardCampoResultados from '../../../components/RegisterComponents/CardCampoResultado';
import { InContext } from '../../../context/DataContext';


import { Container } from './styles';
const CenterMainPage = () => {
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
      <CardCampoResultados />
    </Container>
  );
};

export default CenterMainPage;
