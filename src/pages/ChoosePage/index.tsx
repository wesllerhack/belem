import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { InContext } from '../../context/DataContext';
import { LeftPage } from './LeftMainPage';
import { ContainerChoice, CenterContainer } from './styles';


export const ChoosePage = () => {
  const { setIsSelected } = useContext(InContext);
  useEffect(() => {
    setIsSelected(1)
  }, [])

  return (
    <ContainerChoice>
      <LeftPage />
      <CenterContainer>
        <Link style={{ cursor: 'default' }} to="#"><div><h2>Painel CRS</h2></div></Link>
        <Link to="/painel"><div><h2>Painel de Vendas</h2></div></Link>
      </CenterContainer>

    </ContainerChoice >
  )
}

