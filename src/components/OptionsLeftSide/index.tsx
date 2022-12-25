import React, { useState, useCallback } from 'react'

import { VscGraph } from 'react-icons/vsc'
import { MdOutlinePlaylistAdd } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'

import { Container, OptionsLi } from './styles';

interface OptionsProps {
  selected: Boolean;
  isSelected: Boolean;
}

const OptionsLeftSide = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleOptionSelected = useCallback(() => {
    setIsSelected(true);
  }, []);

  return (
    <Container>
      <ul>
        <OptionsLi  >
          <VscGraph /><span>Dashboard</span>
        </OptionsLi>
        <OptionsLi  >
          <MdOutlinePlaylistAdd /><span>Cadastro</span>
        </OptionsLi>
        <OptionsLi  >
          <FaUserEdit /><span>Perfil</span>
        </OptionsLi>
      </ul>
    </Container>
  )
}

export default OptionsLeftSide
