import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { VscGraph } from 'react-icons/vsc'
import { MdOutlinePlaylistAdd, MdOutlineDashboardCustomize } from 'react-icons/md'

import { Container } from './styles';
import { InContext } from '../../../../context/DataContext'
import { useAuth } from '../../../../context/auth'

interface OptionsProps {
  isSelected: Number;
  setIsSelected: Number;
}

export const OptionsLeftSide = () => {
  const { user } = useAuth()
  const { isSelected, setIsSelected } = useContext(InContext);


  return (
    <Container selected={isSelected}>
      <ul>
        <li  >
          <Link to="/painel" onClick={() => setIsSelected(1)} ><MdOutlineDashboardCustomize /><span>Painel</span></Link>
        </li>
        {
          !!user &&
            !!(user.id_nivel_permissao <= 2) ?
            (<>
              <li  >
                <Link to="/painel/cadastro" onClick={() => setIsSelected(2)}>< MdOutlinePlaylistAdd /><span>Cadastro de metas</span></Link>
              </li>
              <li >
                <Link to="/painel/diarizacao" onClick={() => setIsSelected(3)}><VscGraph /><span>Relatório de diarização</span></Link>
              </li>
            </>) :
            <li >
              <Link to="/painel/diarizacao" onClick={() => setIsSelected(2)}><VscGraph /><span>Relatório de diarização</span></Link>
            </li>
        }

      </ul>
    </Container>
  )
}

