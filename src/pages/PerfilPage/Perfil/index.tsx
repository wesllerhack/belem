import React from 'react'
import { FiCamera } from 'react-icons/fi';

import ButtonAdicionar from '../../../components/ButtonAdicionar';

import Input from '../../../components/Input'

import { Container, AvatarContainer, AvatarInput } from './styles'
const Perfil = () => {
  return (
    <Container>

      <form action="">
        <AvatarContainer>

          <AvatarInput>
            <img src={'https://avatars.githubusercontent.com/u/38771463?v=4'} />
            <label htmlFor="avatar">
              <FiCamera />
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={() => { }}
              />
            </label>
          </AvatarInput>
        </AvatarContainer>

        <Input name='name' type='text' placeholder='Nome' />
        <Input name='email' type='email' placeholder='Email' />
        <Input name='password' type='password' placeholder='Senha Antiga' />
        <Input name='password' type='password' placeholder='Nova Senha' />
        <Input name='password' type='password' placeholder='Confirmar Senha' />

        <ButtonAdicionar disabled={false} nome='Atualizar' />

      </form>

    </Container>
  )
}

export default Perfil
