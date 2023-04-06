import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserHeader } from '../../../components/UserHeader';

import { InContext } from '../../../context/DataContext';

import { BsClipboardData } from 'react-icons/bs';


import { CadastroOptions, InputContainer, ButtonContainer } from './styles';
export const RegisterFormCard = ({ verifyState }: any) => {

  return (
    <CadastroOptions estado={verifyState}>
      <h2>Cadastro de Campo de Resultado</h2>
      <form action="">
        <InputContainer>
          <label htmlFor="">Descricao</label>
          <input type="text" />
        </InputContainer>


        <ButtonContainer>
          <button type='submit'>Salvar</button>
          <button type='submit'>Cancelar</button>
        </ButtonContainer>

      </form>
    </CadastroOptions >

  );
};
