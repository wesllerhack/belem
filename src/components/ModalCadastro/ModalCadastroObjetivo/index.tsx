import React, { useContext, useState } from 'react'

import Select from 'react-select';
import Modal from 'react-modal';


import ButtonAdicionar from '../../ButtonAdicionar';
import Input from '../../Input';
import { IoMdAdd, IoMdClose } from 'react-icons/io'



import { ModalCampo, TitleModal, SelectModal } from './styles';
import { InContext } from '../../../context/DataContext';


const ModalCadastroObjetivoEstrategico = () => {
  const { digitado, setDigitado } = useContext(InContext);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectColor, setSelectColor] = useState({});
  const [descricao, setDescricao] = useState('');


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const state = {
    background: '#000',
  };

  const handleChangeComplete = (color: any, event: any) => {
    console.log(event)
    setSelectColor({ background: color.hex });
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]




  return (
    <>
      <button onClick={openModal}><IoMdAdd /></button>
      <ModalCampo
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(31, 31, 31, 0.75)'
          },

        }}
      >
        <TitleModal>
          <h2 >Cadastre o Objetivo Estratégico</h2>
          <button onClick={closeModal}><IoMdClose /></button>
        </TitleModal>

        <form>
          <div>
            <SelectModal
              placeholder="Selecione o Campo de resultados"


              options={options}
              required
            />

            <Input
              name="Descrição" value={digitado}
            />
          </div>

          <div><ButtonAdicionar nome="Adicionar" /></div>


        </form>

      </ModalCampo>
    </>
  )
}

export default ModalCadastroObjetivoEstrategico
