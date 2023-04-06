import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { VscGraph } from 'react-icons/vsc'
import { MdOutlinePlaylistAdd, MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'

import { Container } from './styles';
import { InContext } from '../../../../context/DataContext'

interface OptionsProps {
  isSelected: Number;
  setIsSelected: Number;
}

export const OptionsLeftSide = () => {
  const { isSelected, setIsSelected } = useContext(InContext);


  return (
    <Container selected={isSelected}>
      <ul>
        <li  >

        </li>
        <li  >
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

