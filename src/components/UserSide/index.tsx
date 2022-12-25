import React from 'react'

import { AiOutlineBell } from 'react-icons/ai'



import { Container, Notification, Profile, User } from './styles'

const UserSide = () => {
  return (
    <Container>

      <Profile>
        <Notification>
          <AiOutlineBell />
          <img src={'https://avatars.githubusercontent.com/u/38771463?v=4'} />

        </Notification>
        <User>
          <h4>Wesller Hack</h4>
          <h5>Analista e Desenvolvedor Full-Stack</h5>
          <span>Lider Imediato:&nbsp;<p>Maykol Schier</p></span>
        </User>
      </Profile>

    </Container>
  )
}

export default UserSide
