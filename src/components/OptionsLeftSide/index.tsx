import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { VscGraph } from 'react-icons/vsc'
import { MdOutlinePlaylistAdd } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'

import { Container, OptionsLi } from './styles';

interface OptionsProps {
  isSelected: Number;
  setIsSelected: Number;
}

const OptionsLeftSide = () => {
  const [isSelected, setIsSelected] = useState(1);



  return (
    <Container selected={isSelected}>
      <ul>
        <OptionsLi  >
          <Link to="/dashboard" onClick={() => setIsSelected(1)} ><VscGraph /><span>Dashboard</span></Link>
        </OptionsLi>
        <OptionsLi  >
          <Link to="/cadastro" onClick={() => setIsSelected(2)}><MdOutlinePlaylistAdd /><span>Cadastro</span></Link>
        </OptionsLi>
        <OptionsLi  >
          <FaUserEdit /><span>Perfil</span>
        </OptionsLi>
      </ul>
    </Container>
  )
}

export default OptionsLeftSide
