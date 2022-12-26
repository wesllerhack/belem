import React, { useState } from 'react'

import { IoMdAdd } from 'react-icons/io'
import { Container } from './styles';
import Modal from 'react-modal';
import 'react-datepicker/dist/react-datepicker.css';

const SelectPeriodo = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Container>
      <h1>Campo de Resultados</h1>
      <button onClick={openModal}><IoMdAdd /></button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </Container>
  )
}

export default SelectPeriodo
