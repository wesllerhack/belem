import React from 'react'

import logoImg from '../../assets/logo.png'
import OptionsLeftSide from '../../components/OptionsLeftSide';

import { Container } from './styles';
const LeftMainPage = () => {

  return (
    <Container>
      <img src={logoImg} alt="Belem" />
      <OptionsLeftSide />
    </Container>
  );
};

export default LeftMainPage;
