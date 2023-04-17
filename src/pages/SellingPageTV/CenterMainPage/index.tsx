import React, { useContext, useEffect, useState } from 'react'

import { SelectPeriodo } from '../../../components/SelectPeriodo';
import { VendaMetaPainelTV } from '../components/PercentuaisVenda';
import { Container, SubHeader, HeaderContainer, TitlePage } from './styles';
import { InContext } from '../../../context/DataContext';

import logoImg from '../../../assets/logo.png'

import { useAuth } from '../../../context/auth';


export const CenterMainPage = () => {
  const { verifyAnimation, setVerifyAnimation, empresas, handleSelectedEmpresa, selectedEmpresa } = useContext(InContext);

  function handleSelectChange(event: any) {
    const as = parseInt(event.target.value)
    handleSelectedEmpresa(as);
  }

  useEffect(() => {
    if (verifyAnimation === false) {
      setVerifyAnimation(true)
    }
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <div>
          <img src={logoImg} alt="Belem" />
        </div>

        <TitlePage>Painel de vendas</TitlePage>

        <SubHeader>
          <SelectPeriodo disabled={true} />
          <div>
            <select style={{ cursor: 'disabled', pointerEvents: 'none' }} value={Number(selectedEmpresa)} onChange={handleSelectChange}>
              <option value="0">Selecione a empresa</option>
              {empresas.map((option) => (
                <option key={option.nroempresa} value={option.nroempresa}>
                  {option.nomereduzido}
                </option>
              ))}
            </select>
          </div>

        </SubHeader>

      </HeaderContainer>
      <VendaMetaPainelTV />

    </Container >
  );
};
