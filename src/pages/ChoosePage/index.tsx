import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { LeftPage } from './LeftMainPage';
import { ContainerChoice, CenterContainer } from './styles';


export const ChoosePage = () => {
  return (
    <ContainerChoice>
      <LeftPage />
      <CenterContainer>
        <Link to="/dashboard"><div><h2>Painel CRS</h2></div></Link>
        <Link to="/painel"><div><h2>Painel de Vendas</h2></div></Link>
      </CenterContainer>

    </ContainerChoice >
  )
}

