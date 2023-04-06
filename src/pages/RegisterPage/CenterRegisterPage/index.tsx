import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserHeader } from '../../../components/UserHeader';

import { InContext } from '../../../context/DataContext';

import { BsClipboardData } from 'react-icons/bs';

import { MdStorage } from 'react-icons/md';

import { VscDebugDisconnect } from 'react-icons/vsc';



import { Container, CenterContainer, CadastroOptions, User, Line } from './styles';
import { RegisterFormCard } from '../RegisterFormCard';
import { CardCampoDeResultado } from '../Cards/CardCampoDeResultado';
import { CardObjetivoEstrategico } from '../Cards/CardObjetivoEstrategico';

export const CenterRegisterPage = () => {
  const { verifyAnimation, setVerifyAnimation } = useContext(InContext);
  const [verifyState, setVerifyState] = useState(0);
  const [pagina, setPagina] = useState(0);

  /*
    useEffect(() => {
      if (verifyAnimation === true) {
        const timer = setTimeout(() => {
          setVerifyAnimation(false)
        }, 1000);
      }
    }, [])
  */


  const showCardForm1 = useCallback((num: number) => {

    setVerifyState(num)

    setTimeout(() => {
      setPagina(num)
    }, 500);
  }, [pagina]);



  return (
    <Container >
      <h1>Cadastro</h1>
      <User>
        <UserHeader />
      </User>
      <Line />

      <CenterContainer>
        <CadastroOptions>
          <ul>
            <li onClick={() => showCardForm1(1)}><Link to=""><BsClipboardData />Campo de Resultado</Link></li>
            <li onClick={() => showCardForm1(2)}><Link to=""><BsClipboardData />Objetivo Estratégico</Link></li>
            <li><Link to=""><BsClipboardData />Indicadores</Link></li>
            <li><Link to=""><MdStorage />Dados do Indicador</Link></li>
            <li><Link to=""><VscDebugDisconnect />Vinculo de Campo de Resultado ao Objetivo Estratégico</Link></li>
            <li><Link to=""><VscDebugDisconnect />Vinculo de Objetivo Estratégico ao Indicador</Link></li>
          </ul>
        </CadastroOptions >

        {
          !!(pagina === 1) && <><CardCampoDeResultado verifyState={verifyState} /></> ||
          !!(pagina === 2) && <CardObjetivoEstrategico verifyState={verifyState} /> ||
          <></>
        }

      </CenterContainer >

    </Container >
  );
};
