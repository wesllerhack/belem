import React, { useContext, useEffect, useMemo, useState } from 'react'

import api from '../../../services/api.js';

import ButtonAdicionar from '../../ButtonAdicionar';
import Input from '../../Input';
import { IoMdAdd, IoMdClose } from 'react-icons/io'

import ProgressBar from "@ramonak/react-progress-bar";


import { HexColorPicker } from "react-colorful";

import { ModalCampo, TitleModal, SelectModal, Card, Content, Title, PercentSquare, ContentBar } from './styles';
import { InContext } from '../../../context/DataContext';
import { useToast } from '../../../context/toast.js';
import { useCallback } from 'react';


const ModalCadastroCampoResultado = () => {
  const { digitado, setDigitado } = useContext(InContext);
  const { addToast } = useToast()


  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [color, setColor] = useState("#aabbcc");
  const [setores, setSetores] = useState([]);
  const [selectedSetor, setSelectedSetor] = useState();


  const pegaSetor = async () => {
    const response = await api.get('api/areas');
    setSetores(response.data);
  }

  const handleInsereCampoResultado = useCallback(async () => {
    const res = await api.post('api/crscdr', { descricao: digitado, id_area: selectedSetor, color: color })
  }, [digitado, selectedSetor, color])

  useEffect(() => {
    pegaSetor()
  }, [])

  const setoresOptions = setores.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))



  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }




  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  console.log(selectedSetor)

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

        <form onSubmit={handleInsereCampoResultado}>
          <div>
            <SelectModal
              placeholder="Selecione o Setor"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : 'transparent',
                }),
              }}
              options={setoresOptions}
              onChange={(as: any) => setSelectedSetor(as.value)}
              required={true}
            />

            <Input
              name="Descrição" value={digitado}
            />
          </div>


          <div className='picker'>
            {/*<SliderPicker
              color={state.background}
              onChange={handleChangeComplete}
            />*/}
            <HexColorPicker color={color} onChange={setColor} />
          </div>


          <div><ButtonAdicionar nome="Adicionar" /></div>


        </form>

        <Card style={{ background: color }}>
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
