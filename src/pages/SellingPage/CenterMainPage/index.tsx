import React, { useContext, useEffect } from 'react'

import { SelectPeriodo } from '../../../components/SelectPeriodo';
import { VendaMeta } from '../components/PercentuaisVenda';
import { Container, SubHeader, User } from './styles';
import { InContext } from '../../../context/DataContext';
import { Link } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io'


export const CenterMainPage = () => {
  const { verifyAnimation, setVerifyAnimation } = useContext(InContext);

  useEffect(() => {
    if (verifyAnimation === false) {
      setVerifyAnimation(true)
    }
  }, [])

  return (
    <Container>
      <Link to="/pages"><IoIosArrowBack />Voltar</Link>
      <h1>Painel de vendas</h1>
      <SubHeader>
        <SelectPeriodo disabled={false} />
      </SubHeader>
      <VendaMeta />
    </Container>
  );
};
