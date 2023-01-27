import React from 'react'
import logo from '../../assets/logo.png'
import InputLogin from '../../components/InputLogin';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';


import { LoginContainer, Login, Side } from './styles';
const LoginPage = () => {
  return (
    <LoginContainer>
      <Side>
        <h3>Seja Bem vindo ao&nbsp;<p>CRS</p>,</h3>
        <h2>Contrato de Resultado <br /> Setoriais</h2>
      </Side>
      <Login>
        <img src={logo} alt="" />
        <p>CRS</p>
        <form >
          <h1>Faça seu logon</h1>

          <input type="text" />
          <input type="text" />
          <button>Enivar</button>
        </form>
      </Login>


    </LoginContainer >
  )
}

export default LoginPage
