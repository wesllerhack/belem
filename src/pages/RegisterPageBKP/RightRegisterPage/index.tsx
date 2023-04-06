import React from 'react'

import { UserHeader } from '../../../components/UserHeader';
import { AddObjetivoEstrategico } from '../../../components/RegisterComponents/AddObjetivoEstrategico';
import { AddIndicador } from '../../../components/RegisterComponents/AddIndicador';
import { AddDadosIndicador } from '../../../components/RegisterComponents/AddDadosIndicador';

import { Container } from './styles';
export const RightMainPage = () => {

  return (
    <Container>
      <UserHeader />
      <AddObjetivoEstrategico />
      <AddIndicador />
      <AddDadosIndicador />
    </Container>
  );
};
