import React, { useContext, useEffect } from 'react'




import { CadastroOptions, InputContainer, ButtonContainer } from './styles';
export const CardObjetivoEstrategico = ({ verifyState }: any) => {

  return (
    <CadastroOptions estado={verifyState}>
      <h2>Cadastro de Objetivo Estratégico</h2>
      <form action="">
        <InputContainer>
          <label htmlFor="">Descrição</label>
          <input type="text" />
        </InputContainer>




        <ButtonContainer>
          <button style={{ color: '#fff' }} type='submit'>Salvar</button>
        </ButtonContainer>

      </form>
    </CadastroOptions >

  );
};
