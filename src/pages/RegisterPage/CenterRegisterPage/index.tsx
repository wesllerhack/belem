import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserHeader } from '../../../components/UserHeader';

import { InContext } from '../../../context/DataContext';

import { BsClipboardData } from 'react-icons/bs';

import { MdStorage } from 'react-icons/md';

import { VscDebugDisconnect } from 'react-icons/vsc';



import { Container, HeaderTitle, CenterContainer, CadastroOptions, User, Line } from './styles';
import { RegisterFormCard } from '../RegisterFormCard';
import { CardCampoDeResultado } from '../Cards/CardCampoDeResultado';
import { CardObjetivoEstrategico } from '../Cards/CardObjetivoEstrategico';
import { CardIndicador } from '../Cards/CardIndicador';
import { CardDadosIndicador } from '../Cards/CardDadosDosIndicadores';
import { CardVinculaCampoObjetivo } from '../Cards/CardVinculaCampoObjetivo';
import { IoIosArrowBack } from 'react-icons/io';

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


  const showCardForm = useCallback((num: number) => {

    setVerifyState(num)

    setTimeout(() => {
      setPagina(num)
    }, 500);
  }, [pagina]);



  return (
    <Container >
      <HeaderTitle>
        <Link to="/pages"><IoIosArrowBack />Voltar</Link>
        <h1>Cadastro</h1>
      </HeaderTitle>
      <User>
        <UserHeader />
      </User>
      <Line />

      <CenterContainer>
        <CadastroOptions>
          <ul>
            <li onClick={() => showCardForm(1)}><Link to=""><BsClipboardData />Campo de Resultado</Link></li>
            <li onClick={() => showCardForm(2)}><Link to=""><BsClipboardData />Objetivo Estratégico</Link></li>
            <li onClick={() => showCardForm(3)}><Link to=""><BsClipboardData />Indicadores</Link></li>
            <li onClick={() => showCardForm(4)}><Link to=""><MdStorage />Dados do Indicador</Link></li>
          </ul>
        </CadastroOptions >

        {
          !!(pagina === 1) && <><CardCampoDeResultado verifyState={verifyState} /></> ||
          !!(pagina === 2) && <CardObjetivoEstrategico verifyState={verifyState} /> ||
          !!(pagina === 3) && <CardIndicador verifyState={verifyState} /> ||
          !!(pagina === 4) && <CardDadosIndicador verifyState={verifyState} /> ||
          !!(pagina === 5) && <CardVinculaCampoObjetivo verifyState={verifyState} /> ||
          <></>
        }

      </CenterContainer >

    </Container >
  );
};
