import React, { useCallback, useContext, useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { UserHeader } from '../../../../components/UserHeader';
import { useAuth } from '../../../../context/auth';

import { InContext } from '../../../../context/DataContext';
import { api } from '../../../../services/api';


interface SetorProps {
  id: number;
  descricao: string;
}
interface CargoProps {
  id: number;
  descricao: string;
}
interface LiderProps {
  id: number;
  name: string;
}
interface EmpresaProps {
  id: number;
  descricao: string;
}
interface FilialProps {
  nroempresa: number;
  nomereduzido: string;
}
interface NivelProps {
  id: number;
  descricao: string;
}

import { Container, HeaderTitle, CenterContainer, CadastroOptions, User, Line, InputContainer, ButtonContainer } from './styles';

export const CenterRegisterUserPage = () => {
  const { user } = useAuth();


  const [nome, setNome] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [verificaUpdate, setVerificaUpdate] = useState(false);

  const [cargos, setCargos] = useState<CargoProps[]>([]);
  const [setores, setSetores] = useState<SetorProps[]>([]);
  const [lideres, setLideres] = useState<LiderProps[]>([]);
  const [empresas, setEmpresas] = useState<EmpresaProps[]>([]);
  const [filiais, setFiliais] = useState<FilialProps[]>([]);
  const [permissoes, setPermissoes] = useState<NivelProps[]>([]);
  const [users, setUsers] = useState<NivelProps[]>([]);

  const [selectedIdUsuario, setSelectedIdUsuario] = useState<number>(0);
  const [selectedCargo, setSelectedCargo] = useState(0);
  const [selectedSetor, setSelectedSetor] = useState(0);
  const [selectedLider, setSelectedLider] = useState(0);
  const [selectedEmpresa, setSelectedEmpresa] = useState(0);
  const [selectedFilial, setSelectedFilial] = useState(0);
  const [selectedPermissao, setSelectedPermissao] = useState(0);


  function handleSelectCargo(event: any) {
    const value = parseInt(event.target.value)
    setSelectedCargo(value)
  }
  function handleSelectSetor(event: any) {
    const value = parseInt(event.target.value)
    setSelectedSetor(value)
  }
  function handleSelectLider(event: any) {
    const value = parseInt(event.target.value)
    setSelectedLider(value)
  }
  function handleSelectEmpresa(event: any) {
    const value = parseInt(event.target.value)
    setSelectedEmpresa(value)
  }
  function handleSelectFilial(event: any) {
    const value = parseInt(event.target.value)
    setSelectedFilial(value)
  }
  function handleSelectPermissao(event: any) {
    const value = parseInt(event.target.value)
    setSelectedPermissao(value)
  }

  const handleInsertUser = useCallback(async (e: any) => {
    e.preventDefault();
    const resp = await api.post('api/createUser/', {
      name: nome,
      login: login,
      email: email,
      password: password,
      id_cargo: selectedCargo,
      id_setor: selectedSetor,
      id_lider_imediato: selectedLider,
      id_empresa: selectedEmpresa,
      id_filial: selectedFilial,
      id_nivel_permissao: selectedPermissao,
    })

    if (resp.status == 201) {
      alert('Usuário cadastrado com sucesso');
      setNome('')
      setLogin('')
      setEmail('')
      setPassword('')
      setSelectedCargo(0)
      setSelectedSetor(0)
      setSelectedLider(0)
      setSelectedEmpresa(0)
      setSelectedFilial(0)
      setSelectedPermissao(0)
    }

  }, [nome, login, email, password, selectedCargo, selectedSetor, selectedLider, selectedEmpresa, selectedFilial, selectedPermissao])

  const handleUpdatetUser = useCallback(async (e: any) => {
    e.preventDefault();
    const resp = await api.put(`api/updateUser/${selectedIdUsuario}`, {
      name: nome,
      login: login,
      email: email,
      password: password,
      id_cargo: selectedCargo,
      id_setor: selectedSetor,
      id_lider_imediato: selectedLider,
      id_empresa: selectedEmpresa,
      id_filial: selectedFilial,
      id_nivel_permissao: selectedPermissao,
    })

    if (resp.status == 200) {
      alert('Usuário cadastrado com sucesso');
      setNome('')
      setLogin('')
      setEmail('')
      setPassword('')
      setSelectedCargo(0)
      setSelectedSetor(0)
      setSelectedLider(0)
      setSelectedEmpresa(0)
      setSelectedFilial(0)
      setSelectedPermissao(0)
    }
    setVerificaUpdate(false)
  }, [selectedIdUsuario, nome, login, email, password, selectedCargo, selectedSetor, selectedLider, selectedEmpresa, selectedFilial, selectedPermissao])

  const handleDeletUser = useCallback(async (selectedIdUsuario: number) => {
    const response = await api.delete(`api/deleteUser/${selectedIdUsuario}`)
    if (response.data.status = 200) {
      alert('Usuário deletado com sucesso')
    }
    setNome('')
    setLogin('')
    setEmail('')
    setPassword('')
    setSelectedCargo(0)
    setSelectedSetor(0)
    setSelectedLider(0)
    setSelectedEmpresa(0)
    setSelectedFilial(0)
    setSelectedPermissao(0)
  }, [])

  useEffect(() => {
    if (user) {
      const pegaDados = async () => {
        try {
          const responseSetores = await api.get('api/areas')
          const responseCargos = await api.get(`api/cargos/${selectedSetor}`)
          const responseLideres = await api.get('api/lideres')
          const responseEmpresas = await api.get('api/empresas')
          const responseFiliais = await api.get('api/painel/filiais')
          const responsePermissoes = await api.get('api/permissoes')
          const responseUsers = await api.get('api/users')

          setCargos(responseCargos.data)
          setSetores(responseSetores.data)
          setLideres(responseLideres.data)
          setEmpresas(responseEmpresas.data)
          setFiliais(responseFiliais.data)
          setPermissoes(responsePermissoes.data)
          setUsers(responseUsers.data)

        } catch (error) {
          console.log('erro: ', error)
        }
      }
      pegaDados()
    }
  }, [user, selectedSetor])


  const handleGetUser = useCallback(async (id_user: number) => {
    const resp = await api.get(`api/users/${id_user}`)

    setSelectedIdUsuario(resp.data[0].id)
    setNome(resp.data[0].name)
    setLogin(resp.data[0].login)
    setEmail(resp.data[0].email)
    setSelectedCargo(resp.data[0].id_cargo)
    setSelectedSetor(resp.data[0].id_setor)
    setSelectedLider(resp.data[0].id_lider_imediato)
    setSelectedEmpresa(resp.data[0].id_empresa)
    setSelectedFilial(resp.data[0].id_filial)
    setSelectedPermissao(resp.data[0].id_nivel_permissao)
  }, [handleInsertUser])


  return (
    <Container >
      <HeaderTitle>
        <h1>Cadastro de Usuário</h1>
      </HeaderTitle>
      <User>
        <UserHeader />
      </User>
      <Line />

      <CenterContainer>
        <CadastroOptions>
          <h2>Cadastro de Usuário</h2>
          <form onSubmit={!verificaUpdate ? handleInsertUser : handleUpdatetUser} >
            <InputContainer>
              <div>
                <label htmlFor="">Nome completo</label>
                <input
                  placeholder="Digite o nome completo"
                  value={nome}
                  onChange={(event: any) => setNome(event.target.value)}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Login</label>
                <input
                  placeholder="Digite o login"
                  value={login}
                  onChange={(event: any) => setLogin(event.target.value)}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  placeholder="Digite o email"
                  value={email}
                  onChange={(event: any) => setEmail(event.target.value)}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="">Senha</label>
                <input
                  placeholder="Digite a senha"
                  value={password}
                  onChange={(event: any) => setPassword(event.target.value)}
                  type="password"
                />
              </div>
              <div>
                <label htmlFor="">Setor</label>
                <select placeholder='' value={Number(selectedSetor)} onChange={handleSelectSetor}>
                  <option style={{ color: '#ccc' }} value="0">Selecione o setor</option>
                  {setores.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.descricao}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Cargo</label>
                <select placeholder='' value={Number(selectedCargo)} onChange={handleSelectCargo}>
                  <option style={{ color: '#ccc' }} value="0">Selecione o cargo</option>
                  {cargos.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.descricao}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="">Líder imediato</label>
                <select placeholder='' value={Number(selectedLider)} onChange={handleSelectLider}>
                  <option style={{ color: '#ccc' }} value="0">Selecione o líder</option>
                  {lideres.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Empresa</label>
                <select placeholder='' value={Number(selectedEmpresa)} onChange={handleSelectEmpresa}>
                  <option style={{ color: '#ccc' }} value="0">Selecione a empresa</option>
                  {empresas.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.descricao}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Filial</label>
                <select placeholder='' value={Number(selectedFilial)} onChange={handleSelectFilial}>
                  <option style={{ color: '#ccc' }} value="0">Selecione a filial</option>
                  {filiais.map((option) => (
                    <option key={option.nroempresa} value={option.nroempresa}>
                      {option.nomereduzido}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Nível de permissão</label>
                <select placeholder='' value={Number(selectedPermissao)} onChange={handleSelectPermissao}>
                  <option style={{ color: '#ccc' }} value="0">Selecione a nível</option>
                  {permissoes.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.descricao}
                    </option>
                  ))}
                </select>
              </div>
            </InputContainer>

            <ButtonContainer>
              <button type='submit' style={{ color: '#fff' }} >Salvar</button>
              <button type="button" style={{ background: 'red', color: '#fff' }} onClick={() => { handleDeletUser(selectedIdUsuario) }} >Excluir</button>

            </ButtonContainer>

          </form >
        </CadastroOptions >

        <CadastroOptions>
          <h2>Usuários</h2>
          {!!users ?
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Login</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {
                  users?.map((user: any) => (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.login}</td>
                      <td title='Editar' onClick={() => { handleGetUser(user.id); setVerificaUpdate(true) }}><BiEdit /></td>
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
