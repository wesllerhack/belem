
import { AiOutlineBell } from 'react-icons/ai'
import { useAuth } from '../../context/auth'
import { useInContext } from '../../context/DataContext';
import userImg from '../../assets/user2.png'


import { Container, Notification, Profile, User } from './styles'

export const UserHeader = () => {
  const { user } = useAuth();
  const { infoUser } = useInContext();

  const { cargo, setor, lider, } = infoUser

  return (
    <Container>
      <Notification>
        <AiOutlineBell />
      </Notification>
      <Profile>
        <User>

          <h4>{user.name}</h4>
          <h5>{cargo}</h5>
          <span>Lider Imediato:&nbsp;<p>{lider}</p></span>
          <span>Setor:&nbsp;<p>{setor}</p></span>
        </User>
        <img src={userImg} />
      </Profile>
    </Container>
  )
}
