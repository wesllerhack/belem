import React from 'react'

import SelectPeriodo from '../../../components/SelectPeriodo';
import CardCampoResultados from '../../../components/CardCampoResultado';
import SetorSelector from '../../../components/SetorSelector';

import { Container, SubHeader } from './styles';
const CenterMainPage = () => {

  return (
    <Container>
      <h1>Campo de Resultados</h1>
      <SubHeader>
        <SelectPeriodo />
        <SetorSelector />
      </SubHeader>
      <CardCampoResultados />

    </Container>
  );
};

export default CenterMainPage;
