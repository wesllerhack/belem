import React from 'react'

import AddCardCampoResultado from '../../../components/RegisterComponents/AddCardCampoResultado'
import CardCampoResultados from '../../../components/RegisterComponents/CardCampoResultado';


import { Container } from './styles';
const CenterMainPage = () => {

  return (
    <Container>
      <AddCardCampoResultado />
      <CardCampoResultados />
    </Container>
  );
};

export default CenterMainPage;
