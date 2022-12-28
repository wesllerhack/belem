import React, { useContext, useState } from 'react'

import Select from 'react-select';

import ButtonAdicionar from '../../ButtonAdicionar';
import Input from '../../Input';
import { IoMdAdd, IoMdClose } from 'react-icons/io'
import { FiLock } from 'react-icons/fi'

import ProgressBar from "@ramonak/react-progress-bar";

import { SliderPicker } from 'react-color';

import { ModalCampo, TitleModal, SelectModal, Card, Content, Title, PercentSquare, ContentBar } from './styles';
import { InContext } from '../../../context/DataContext';


const ModalCadastroCampoResultado = () => {
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
          <h2 >Cadastre o Campo de Resultado</h2>
          <button onClick={closeModal}><IoMdClose /></button>
        </TitleModal>

        <form>
          <div>
            <SelectModal
              placeholder="Selecione o Setor"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : 'transparent',
                }),
              }}
              options={options}
              required
            />

            <Input
              name="Descrição" value={digitado}
            />
          </div>


          <div className='picker'>
            <SliderPicker
              color={state.background}
              onChange={handleChangeComplete}
            />
          </div>


          <div><ButtonAdicionar nome="Adicionar" /></div>


        </form>

        <Card style={selectColor}>
          <Content >
            <Title>
              {/* o Icone vai aqui */}
              <h2>{digitado}</h2>
            </Title>
            <PercentSquare>
              <div>100%</div>
              <p>atingido</p>
            </PercentSquare>
          </Content>
          <ContentBar>
            <ProgressBar
              className="wrapper"
              completed={100}
              bgColor={'#fff'}
              baseBgColor={'#acacacc3'}
              labelColor={'#000'}
            />
          </ContentBar>
        </Card>

      </ModalCampo>
    </>
  )
}

export default ModalCadastroCampoResultado
