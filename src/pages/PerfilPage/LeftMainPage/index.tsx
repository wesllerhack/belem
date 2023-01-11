import React from 'react'

import logoImg from '../../../assets/logo.png'
import OptionsLeftSide from '../../../components/OptionsLeftSide';
import UserSide from '../../../components/UserSide';

import { Container } from './styles';
const LeftMainPage = () => {

  return (
    <Container>
      <img src={logoImg} alt="Belem" />
      <p>CRS</p>
      <OptionsLeftSide />
    </Container>
  );
};

export default LeftMainPage;
