import React, { useCallback, useRef, useState } from 'react'
import logo from '../../assets/logoCrs.png'
import { FiLock, FiUser } from 'react-icons/fi';

import * as Yup from 'yup'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { InputLogin } from '../../components/InputLogin';

import { LoginContainer, Login, Side } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../context/auth';
import { useInContext } from '../../context/DataContext';
import { useToast } from '../../context/toast';

interface SignInFormData {
  user: string;
  password: string;
}

export const LoginPage = () => {
  const { addToast } = useToast();
  const { signIn } = useAuth();
  const { handleLoading } = useInContext();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      handleLoading()
      try {

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          user: Yup.string()
            .required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        var stat;


        await signIn({ login: data.user, password: data.password });


      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais ou usuario pode estar incompleto',
        });
      }
    },
    [],
  );


  return (
    <LoginContainer>

      <Login>
        <div>
          <img src={logo} alt="" />
        </div>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <h2>Faça seu logon</h2>
          <InputLogin
            name='user'
            icon={FiUser}
            placeholder='Usuário'
            type="text"
          />
          <InputLogin
            name='password'
            icon={FiLock}
            placeholder='Senha'
            type='password'
          />
          <button type='submit'>Enivar</button>
        </Form>
      </Login>
      <Side>
        <h3>Seja Bem vindo ao&nbsp;<p>CRS</p>,</h3>
        <h2>Contrato de Resultado <br /> Setoriais</h2>
      </Side>


    </LoginContainer >
  )
}

