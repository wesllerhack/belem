import React, { useContext, useEffect, useState } from 'react'

import { SelectPeriodo } from '../../../components/SelectPeriodo';
import { VendaMeta } from '../components/PercentuaisVenda';
import { Container, Header, User, HeaderTitle, SubHeader, Line } from './styles';
import { InContext } from '../../../context/DataContext';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';


import { IoIosArrowBack } from 'react-icons/io'
import { useAuth } from '../../../context/auth';
import { UserHeader } from '../../../components/UserHeader';

export const CenterMainPage = () => {
  const { user } = useAuth();
  const { verifyAnimation, setVerifyAnimation, empresas, handleSelectedEmpresa, selectedEmpresa, handleVisualizaValor, visualizaValor, setLoadingPainel } = useContext(InContext);


  const [desabilitaSelect, setDesabilitaSelect] = useState(false)

  function handleSelectChange(event: any) {
    setDesabilitaSelect(true)
    const as = parseInt(event.target.value)
    setLoadingPainel(true)

    handleSelectedEmpresa(as);
    const intervalId = setInterval(() => {
      setDesabilitaSelect(false)
    }, 30000);

    return () => clearInterval(intervalId);
  }

  useEffect(() => {
    if (verifyAnimation === false) {
      setVerifyAnimation(true)
    }

  }, [])




  return (
    <Container>
      <Header>
        <HeaderTitle>
          <Link to="/pages"><IoIosArrowBack />Voltar</Link>
          <h1>Painel de vendas</h1>
        </HeaderTitle>

        <SubHeader>
          <SelectPeriodo disabled={true} />
          <div >
            {!!user &&
              !!(user.id_nivel_permissao <= 3) ?
              (<select disabled={desabilitaSelect} placeholder='' value={Number(selectedEmpresa)} onChange={handleSelectChange}>
                <option value="0">Selecione a empresa</option>
                {empresas.map((option) => (
                  <option key={option.nroempresa} value={option.nroempresa}>
                    {option.nomereduzido}
                  </option>
                ))}
              </select>) :
              (<select
                style={{ cursor: 'disabled', pointerEvents: 'none' }}
                disabled={true}
                value={Number(selectedEmpresa)}
                onChange={handleSelectChange}>
                <option value="0">Selecione a empresa</option>
                {empresas.map((option) => (
                  <option key={option.nroempresa} value={option.nroempresa}>
                    {option.nomereduzido}
                  </option>
                ))}
              </select>)
            }
          </div>
          {user.id_nivel_permissao <= 2 &&
            < span title='Clique para visualizar/esconder os valores' onClick={handleVisualizaValor}>
              {!visualizaValor ? <FiEye /> : <FiEyeOff />}
            </span>}
        </SubHeader>
      </Header>
      <User>
        <UserHeader />

      </User>
      <Line />

      <VendaMeta />
    </Container >
  );
};
