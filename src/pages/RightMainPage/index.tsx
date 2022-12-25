import React from 'react'

import UserHeader from '../../components/UserHeader';
import ObjetivoEstrategico from '../../components/ObjetivoEstrategico';
import Indicador from '../../components/Indicador';
import DadosIndicador from '../../components/DadosIndicador';

import { Container } from './styles';
const RightMainPage = () => {

  return (
    <Container>
      <UserHeader />
      <ObjetivoEstrategico />
      <Indicador />
      <DadosIndicador />
    </Container>
  );
};

export default RightMainPage;
