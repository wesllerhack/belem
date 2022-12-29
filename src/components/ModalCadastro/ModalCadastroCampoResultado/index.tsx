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
  const { addToast } = useToast();


  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [color, setColor] = useState("#aabbcc");
  const [setores, setSetores] = useState([]);
  const [selectedSetor, setSelectedSetor] = useState(null);
  const [descricao, setDescricao] = useState();

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // If there is data, the form is valid
    setIsValid(color && selectedSetor && descricao ? true : false);
  }, [color, selectedSetor, descricao]);

  useEffect(() => {
    const pegaSetor = async () => {
      const response = await api.get('api/areas');
      setSetores(response.data);
    }
    pegaSetor()
  }, [])

  const handleInsereCampoResultado = useCallback(async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const res = await api.post('api/crscdr', { descricao: descricao, id_area: selectedSetor, color: color })
    setIsOpen(false);
    setSelectedSetor(null);
    setDigitado(null)
    if (res.status === 201) {
      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso'
      });
    } else {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro ao realizar o cadastro'
      });
    }
  }, [descricao, selectedSetor, color])



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
              type="text"
              placeholder="Digite a descrição"
              onChange={(event: any) => setDescricao(event.target.value)}
              name="Descricao"
            />
          </div>


          <div className='picker'>
            <HexColorPicker color={color} onChange={setColor} />
          </div>


          <div><ButtonAdicionar disabled={!isValid} nome="Adicionar" /></div>
          {!isValid && <p style={{ color: 'red' }}>Todos os campos devem ser preenchidos</p>}

        </form>

        <Card style={{ background: color }}>
          <Content >
            <Title>
              {/* o Icone vai aqui */}
              <h2>{descricao}</h2>
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
