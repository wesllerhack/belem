import React, { useContext, useEffect } from 'react'

import SelectPeriodo from '../../../components/SelectPeriodo';
import CardCampoResultados from '../../../components/CardCampoResultado';
import SetorSelector from '../../../components/SetorSelector';
import UserHeader from '../../../components/UserHeader';
import Table from '../../../components/TableTest';
import TableFooter from '../../../components/TableFooter';
import { Container, SubHeader, User } from './styles';
import { InContext } from '../../../context/DataContext';
const CenterMainPage = () => {
  const { verifyAnimation, setVerifyAnimation } = useContext(InContext);

  useEffect(() => {
    if (verifyAnimation === false) {
      setVerifyAnimation(true)
    }
  }, [])

  return (
    <Container>
      <h1>Consolidado</h1>
      <SubHeader>
        <SelectPeriodo />
        <SetorSelector />
      </SubHeader>
      <User>
        <UserHeader />
      </User>
      <Table />
      <TableFooter />

    </Container>
  );
};

export default CenterMainPage;
