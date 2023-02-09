import React from 'react'
import { FiCamera } from 'react-icons/fi';

import { ButtonAdicionar } from '../../../components/ButtonAdicionar';

import { Input } from '../../../components/Input'
import { useAuth } from '../../../context/auth';

import userImg from '../../../assets/user2.png'

import { Container, AvatarContainer, AvatarInput } from './styles'
export const Perfil = () => {
  const { user } = useAuth();
  return (
    <Container>

      <form action="">
        <AvatarContainer>

          <AvatarInput>
            <img src={userImg} />
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

        <Input style={{ background: '#ccc' }} name='name' disabled type='text' placeholder={user.name} />
        <Input style={{ background: '#ccc' }} name='email' disabled type='email' placeholder={user.email} />
        <Input name='password' type='password' placeholder='Senha Antiga' />
        <Input name='password' type='password' placeholder='Nova Senha' />
        <Input name='password' type='password' placeholder='Confirmar Senha' />

        <ButtonAdicionar disabled={false} nome='Atualizar' />

      </form>

    </Container>
  )
}
