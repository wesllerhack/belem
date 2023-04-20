import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { VscGraph } from 'react-icons/vsc'
import { MdOutlinePlaylistAdd, MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'

import { Container } from './styles';
import { InContext } from '../../../../context/DataContext'
import { useAuth } from '../../../../context/auth'

interface OptionsProps {
  isSelected: Number;
  setIsSelected: Number;
}

export const OptionsLeftSide = () => {
  const { user } = useAuth();
  const { isSelected, setIsSelected } = useContext(InContext);


  return (
    <Container selected={isSelected}>
      <ul>
        <li  >
          <Link to="/pages" onClick={() => setIsSelected(1)}><FaUserEdit /><span>Páginas</span></Link>
        </li>
        <li>
          {
            !!user &&
            !!(user.id_nivel_permissao === 1) &&
            <Link to="/cadastro/usuario" onClick={() => setIsSelected(2)}><FaUserEdit /><span>Cadastro de usuário</span></Link>
          }
        </li>
        <li  >
        </li>
        {/* <li >
          <Link to="/perfil" onClick={() => setIsSelected(4)}><FaUserEdit /><span>Perfil</span></Link>
        </li>*/}
      </ul>
    </Container>
  )
}

