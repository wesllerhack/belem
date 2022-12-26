import React from 'react'

import SelectPeriodo from '../../../components/SelectPeriodo';
import CardCampoResultados from '../../../components/CardCampoResultado';


import { Container } from './styles';
const CenterMainPage = () => {

  return (
    <Container>
      <SelectPeriodo />
      <CardCampoResultados />
    </Container>
  );
};

export default CenterMainPage;
