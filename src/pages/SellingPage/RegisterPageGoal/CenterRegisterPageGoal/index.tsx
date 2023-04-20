import React, { useCallback, useContext, useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { UserHeader } from '../../../../components/UserHeader';
import { useAuth } from '../../../../context/auth';

import { InContext } from '../../../../context/DataContext';
import { api } from '../../../../services/api';


interface EmpresaProps {
  nroempresa: number;
  nomereduzido: string;
  status: string;
}



interface MetasProps {
  empresa: string;
  data_meta: string;
  valor_venda_meta: string;
}

import { Container, HeaderTitle, CenterContainer, CadastroOptions, User, Line, InputContainer, ButtonContainer } from './styles';

export const CenterRegisterPageGoal = () => {
  const { user } = useAuth();

  var date = new Date();


  const [selectedAno, setSelectedAno] = useState(date.getFullYear());
  const [selectedMes, setSelectedMes] = useState('');
  const [valorVendaMeta, setValorVendaMeta] = useState('');

  const [selecionaEmpresaMeta, setSelecionaEmpresaMeta] = useState<EmpresaProps[]>([]);
  const [selectedEmpresaMeta, setSelectedEmpresaMeta] = useState(0);

  const [metas, setMetas] = useState<MetasProps[] | undefined>()

  /*
    useEffect(() => {
      if (verifyAnimation === true) {
        const timer = setTimeout(() => {
          setVerifyAnimation(false)
        }, 1000);
      }
    }, [])
  */



  function handleSelectChange(event: any) {
    const as = parseInt(event.target.value)
    setSelectedEmpresaMeta(as)
  }

  const handleInsereMeta = useCallback(async (e: any) => {
    e.preventDefault();

    const valor_venda_meta = parseFloat(valorVendaMeta)
    const nroempresa = selectedEmpresaMeta
    const mes = parseInt(selectedMes)
    const ano = selectedAno

    if (!!valor_venda_meta && !!nroempresa && !!mes && !!ano) {

      try {
        const response = await api.post('api/painel/insereMeta', { valor_venda_meta, nroempresa, mes, ano })
        alert('Cadastro realizado com sucesso');

      } catch {
        alert('Erro ao realizar cadastro');
      }
    } else {
      alert('Erro ao realizar cadastro');
    }

    setSelectedAno(date.getFullYear());
    setSelectedMes('');
    setSelectedEmpresaMeta(0);
    setValorVendaMeta('');

  }, [selectedEmpresaMeta, selectedMes, valorVendaMeta, selectedAno])

  useEffect(() => {
    if (user) {
      const pegaEmpresas = async () => {
        try {

          const response = await api.get(`api/painel/filiais`);
          setSelecionaEmpresaMeta(response.data);

          const responseMetas = await api.get(`api/painel/listaMetas`);
          setMetas(responseMetas.data);

        } catch (error) {
          console.log('erro: ', error)
        }
      }
      pegaEmpresas()
    }
  }, [user, handleInsereMeta])

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
          <h2>Cadastro de Meta</h2>
          <form onSubmit={handleInsereMeta} >
            <InputContainer>
              <div>
                <label htmlFor="">Valor da meta</label>
                <input
                  placeholder="Digite o valor"
                  value={valorVendaMeta}
                  onChange={(event: any) => setValorVendaMeta(event.target.value)}
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="">Selecione a filial</label>
                <select placeholder='' value={Number(selectedEmpresaMeta)} onChange={handleSelectChange}>
                  <option style={{ color: '#ccc' }} value="0">Selecione a filial</option>
                  {selecionaEmpresaMeta.map((option) => (
                    <option key={option.nroempresa} value={option.nroempresa}>
                      {option.nomereduzido}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Ano de referência</label>
                <input
                  maxLength={4}
                  minLength={4}
                  min={2023}
                  placeholder="Digite o Ano"
                  value={selectedAno}
                  onChange={(event: any) => setSelectedAno(event.target.value)}
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="">Mês de referência</label>
                <select
                  placeholder=''
                  value={selectedMes}
                  onChange={(event: any) => setSelectedMes(event.target.value)}
                >
                  <option style={{ color: '#ccc' }} value="">Selecione o Mês</option>
                  <option value="1">Janeiro</option>
                  <option value="2">Fevereiro</option>
                  <option value="3">Março</option>
                  <option value="4">Abril</option>
                  <option value="5">Maio</option>
                  <option value="6">Junho</option>
                  <option value="7">Julho</option>
                  <option value="8">Agosto</option>
                  <option value="9">Setembro</option>
                  <option value="10">Outubro</option>
                  <option value="11">Novembro</option>
                  <option value="12">Dezembro</option>
                </select>
              </div>
              {/* <div>
                <label htmlFor="">Mês de referência</label>
                <input
                  maxLength={2}
                  minLength={1}
                  min={1}
                  max={12}
                  placeholder="Digite o Mês"
                  value={selectedMes}
                  onChange={(event: any) => setSelectedMes(event.target.value)}
                  type="number"
                />
                  </div>*/}
            </InputContainer>

            <ButtonContainer>
              <button style={{ color: '#fff' }} type='submit'>Salvar</button>
            </ButtonContainer>

          </form >
        </CadastroOptions >

        <CadastroOptions>
          <h2>Metas</h2>

          {!!metas ?
            <table>
              <thead>
                <tr>
                  <th>Empresa</th>
                  <th>Data</th>
                  <th>Meta</th>
                  {/* <th>#</th>*/}
                </tr>
              </thead>
              <tbody>
                {
                  metas?.map((meta: MetasProps) => (
                    <tr>
                      <td>{meta.empresa}</td>
                      <td>{meta.data_meta}</td>
                      <td>{Number(meta.valor_venda_meta).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })}</td>
                      {/* <td title='excluir'>x</td>*/}
                    </tr>
                  ))
                }
              </tbody>
            </table>
            : <>Nenhuma meta cadastrada</>}
        </CadastroOptions >

      </CenterContainer >

    </Container >
  );
};
