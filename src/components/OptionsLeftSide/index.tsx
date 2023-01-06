import React, { useState, useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'

import { VscGraph } from 'react-icons/vsc'
import { MdOutlinePlaylistAdd, MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'

import { Container } from './styles';
import { InContext } from '../../context/DataContext'

interface OptionsProps {
  isSelected: Number;
  setIsSelected: Number;
}

const OptionsLeftSide = () => {
  const { isSelected, setIsSelected } = useContext(InContext);


  return (
    <Container selected={isSelected}>
      <ul>
        <li  >
          <Link to="/dashboard" onClick={() => setIsSelected(1)} ><MdOutlineDashboardCustomize /><span>Dashboard</span></Link>
        </li>
        <li  >
          <Link to="/cadastro" onClick={() => setIsSelected(2)}><MdOutlinePlaylistAdd /><span>Cadastro</span></Link>
        </li>
        <li  >
          <Link to="/consolidado" onClick={() => setIsSelected(3)}><VscGraph /><span>Consolidado</span></Link>
        </li>
        <li  >
          <FaUserEdit /><span>Perfil</span>
        </li>
      </ul>
    </Container>
  )
}

export default OptionsLeftSide
