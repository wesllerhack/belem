import React, { useCallback, useContext, useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { UserHeader } from '../../../../components/UserHeader';
import { useAuth } from '../../../../context/auth';

import { InContext } from '../../../../context/DataContext';
import { api } from '../../../../services/api';

import { FiEye, FiEyeOff } from 'react-icons/fi';


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

export const CenterUserPage = () => {
  const { user } = useAuth();


  const [nome, setNome] = useState<string>(user.name);
  const [login, setLogin] = useState<string>(user.login);
  const [email, setEmail] = useState<string>(user.email);
  const [password, setPassword] = useState<string>('');

  const [verificaUpdate, setVerificaUpdate] = useState(false);

  const [cargos, setCargos] = useState<CargoProps[]>([]);
  const [setores, setSetores] = useState<SetorProps[]>([]);
  const [lideres, setLideres] = useState<LiderProps[]>([]);
  const [empresas, setEmpresas] = useState<EmpresaProps[]>([]);
  const [filiais, setFiliais] = useState<FilialProps[]>([]);
  const [permissoes, setPermissoes] = useState<NivelProps[]>([]);
  const [users, setUsers] = useState<NivelProps[]>([]);

  const [selectedIdUsuario, setSelectedIdUsuario] = useState<string>(user.id);
  const [selectedCargo, setSelectedCargo] = useState(user.id_cargo);
  const [selectedSetor, setSelectedSetor] = useState(user.id_setor);
  const [selectedLider, setSelectedLider] = useState(user.id_lider_imediato);
  const [selectedEmpresa, setSelectedEmpresa] = useState(user.id_empresa);
  const [selectedFilial, setSelectedFilial] = useState(user.id_filial);
  const [selectedPermissao, setSelectedPermissao] = useState(user.id_nivel_permissao);

  const [visible, setVisible] = useState(false)

  const handlePasswordVisibility = (event: any) => {
    event.preventDefault();
    setVisible(state => !state)
  }

  let typeInput = 'password';

  if (typeInput == 'password') {
    typeInput = !visible ? 'password' : 'text'
  }

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
      alert('Usuário alterado com sucesso para atualizar o perfil saia e entre novamente');

    }
    setVerificaUpdate(false)
  }, [selectedIdUsuario, nome, login, email, password, selectedCargo, selectedSetor, selectedLider, selectedEmpresa, selectedFilial, selectedPermissao])


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




  return (
    <Container >
      <HeaderTitle>
        <h1>Perfil</h1>
      </HeaderTitle>
      <User>
        <UserHeader />
      </User>
      <Line />

      <CenterContainer>
        <CadastroOptions>
          <h2>Usuário</h2>
          <form onSubmit={handleUpdatetUser} >
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
                  disabled={true} style={{ cursor: 'not-allowed' }}
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
              {/*<div>
                <label htmlFor="">Avatar</label>
                <input
                  style={{ background: 'blue' }}
                  onChange={(event: any) => setEmail(event.target.value)}
                  type="file"
                />
  </div>*/}
              <div>
                <label htmlFor="">Senha</label>
                <input
                  placeholder="Digite a senha"
                  value={password}
                  onChange={(event: any) => setPassword(event.target.value)}
                  type={typeInput}
                  required
                />
                {/*< span onClick={handlePasswordVisibility}>
                  {!visible ? <FiEye /> : <FiEyeOff />}
                </span>*/}
              </div>

            </InputContainer>

            <ButtonContainer>
              <button type='submit' style={{ color: '#fff' }} >Atualizar</button>

            </ButtonContainer>

          </form >
        </CadastroOptions >
      </CenterContainer >

    </Container >
  );
};
