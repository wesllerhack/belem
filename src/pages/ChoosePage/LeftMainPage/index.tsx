import logoImg from '../../../assets/logo.png'
import { FiLogOut } from 'react-icons/fi';
import { OptionsLeftSide } from '../components/OptionsLeftSide';

import { Container, Logout } from './styles';
import { useAuth } from '../../../context/auth'; 1
export const LeftPage = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <img src={logoImg} alt="Belem" />
      <p></p>
      <OptionsLeftSide />
      <Logout >
        <span>Sair</span>
        <button onClick={signOut}>
          <FiLogOut />
        </button>
      </Logout>
    </Container >
  );
};
