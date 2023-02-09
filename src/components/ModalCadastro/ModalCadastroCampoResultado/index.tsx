import React, { useEffect, useState } from 'react'
import { api } from '../../../services/api.js';
import { ButtonAdicionar } from '../../ButtonAdicionar';
import { Input } from '../../Input';
import { IoMdAdd, IoMdClose } from 'react-icons/io'
import CardProgressBar from "@ramonak/react-progress-bar";
import { HexColorPicker } from "react-colorful";
import { useInContext } from '../../../context/DataContext';
import { useToast } from '../../../context/toast.js';
import { useCallback } from 'react';
import { ModalCampo, TitleModal, SelectModal, Card, CardContent, CardTitle, CardPercentSquare, CardContentBar } from './styles';
import '../styles.css'

interface DescricaoCardProps {
  descricao: any;
}



export const ModalCadastroCampoResultado = () => {
  const { permiteCadastro } = useInContext();
  const { addToast } = useToast();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [color, setColor] = useState("#aabbcc");
  const [setores, setSetores] = useState([]);
  const [selectedSetor, setSelectedSetor] = useState(null);
  const [descricao, setDescricao] = useState(null);

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // If there is data, the form is valid
    setIsValid(!!color && !!selectedSetor && !!descricao ? true : false);
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
    const res = await api.post('api/crscdr', { descricao: descricao, id_area: selectedSetor, color: color });
    console.log(res)
    setIsOpen(false);
    setSelectedSetor(null);
    setDescricao(null)
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
    setDescricao(null);
    setSelectedSetor(null);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setDescricao(null);
    setSelectedSetor(null);
  }

  return (
    <>
      <button disabled={!!permiteCadastro} onClick={openModal}><IoMdAdd /></button>
      <ModalCampo
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            position: 'fixed',
            zIndex: 9999,
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
              className="react-select-container"
              classNamePrefix="react-select"
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


          <div>
            <ButtonAdicionar disabled={!isValid} nome="Adicionar" />
            {!isValid && <p style={{ color: 'red' }}>Todos os campos devem ser preenchidos</p>}
          </div>

        </form>

        <Card style={{ background: color }}>
          <CardContent >
            <CardTitle>
              {/* o Icone vai aqui */}
              <h2>{descricao}</h2>
            </CardTitle>
            <CardPercentSquare>
              <div>100%</div>
              <p>atingido</p>
            </CardPercentSquare>
          </CardContent>
          <CardContentBar>
            <CardProgressBar
              className="wrapper"
              completed={100}
              bgColor={'#fff'}
              baseBgColor={'#acacacc3'}
              labelColor={'#000'}
            />
          </CardContentBar>
        </Card>

      </ModalCampo>
    </>
  )
}
