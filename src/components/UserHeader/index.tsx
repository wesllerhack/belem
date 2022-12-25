import React from 'react'

import { AiOutlineBell } from 'react-icons/ai'



import { Container, Notification, Profile, User } from './styles'

const UserHeader = () => {
  return (
    <Container>
      <Notification>
        <AiOutlineBell />
      </Notification>
      <Profile>
        <User>
          <h4>Wesller Hack</h4>
          <h5>Analista e Desenvolvedor Full-Stack</h5>
          <span>Lider Imediato:&nbsp;<p>Maykol Schier</p></span>
        </User>
        <img src={'https://avatars.githubusercontent.com/u/38771463?v=4'} />
      </Profile>
    </Container>
  )
}

export default UserHeader
