import React, { useCallback, useContext, useEffect, useState } from 'react'

import Select from 'react-select';
import Modal from 'react-modal';


import ButtonAdicionar from '../../ButtonAdicionar';
import Input from '../../Input';
import { IoMdAdd, IoMdClose } from 'react-icons/io'



import { ModalCampo, TitleModal, SelectModal } from './styles';
import { InContext } from '../../../context/DataContext';
import { useToast } from '../../../context/toast';
import api from '../../../services/api';


const ModalCadastroIndicador = () => {
  const { digitado, setDigitado } = useContext(InContext);
  const { addToast } = useToast()


  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [descricao, setDescricao] = useState();


  const [setores, setSetores] = useState([]);
  const [selectedSetor, setSelectedSetor] = useState(null);

  const [campoResultado, setCampoResultado] = useState([])
  const [selectedCampo, setSelectedCampo] = useState(null);

  const [objetivoEstrategico, setObjetivoEstrategico] = useState([])
  const [selectedObjetivo, setSelectedObjetivo] = useState(null);

  const [isValid, setIsValid] = useState(false);


  useEffect(() => {
    // If there is data, the form is valid
    setIsValid(selectedSetor && selectedCampo && selectedObjetivo && descricao ? true : false);
  }, [selectedSetor, selectedCampo, selectedObjetivo, descricao]);

  useEffect(() => {
    const pegaSetor = async () => {
      const response = await api.get('api/areas');
      setSetores(response.data);
    }
    pegaSetor()
  }, [])

  const setoresOptions = setores.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))


  useEffect(() => {
    const pegaCampo = async () => {
      const response = await api.get(`api/crscdr/${selectedSetor}`, {});
      setCampoResultado(response.data);
    }
    pegaCampo()
  }, [selectedSetor])

  const camposOptions = campoResultado.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))

  useEffect(() => {
    const pegaObjetivo = async () => {
      const response = await api.get(`api/crsobe/${selectedCampo}`);
      setObjetivoEstrategico(response.data);
    }
    pegaObjetivo()
  }, [selectedCampo])

  const objetivoOptions = objetivoEstrategico.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))

  const handleInsereIndicador = useCallback(async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const res = await api.post('api/crsind', { descricao: descricao, id_objetivo_estrategico: selectedObjetivo })
    setIsOpen(false);
    setSelectedCampo(null);
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
  }, [descricao, selectedSetor])


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
    menuList: (provided: any, state: any) => {
      // console.log("get styles for menu with", provided, state);
      return {
        ...provided,
        maxHeight: "200px"
      };
    }
  };


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
          <h2 >Cadastre o Indicador</h2>
          <button onClick={closeModal}><IoMdClose /></button>
        </TitleModal>

        <form onSubmit={handleInsereIndicador}>
          <div>
            <SelectModal
              placeholder="Selecione o Setor"
              onChange={(as: any) => { setSelectedSetor(as.value); setSelectedCampo(null) }}
              options={setoresOptions}
              styles={customStyles}
              required={true}
            />

            <SelectModal
              placeholder="Selecione o Campo de resultados"
              onChange={(as: any) => { setSelectedCampo(as.value); setSelectedObjetivo(null) }}
              options={camposOptions}
              styles={customStyles}
              required
            />

            <SelectModal
              placeholder="Selecione o Objetivo Estratégico"
              onChange={(as: any) => setSelectedObjetivo(as.value)}
              options={objetivoOptions}
              styles={customStyles}
              required
            />

            <Input
              type="text"
              placeholder="Digite a descrição"
              onChange={(event: any) => setDescricao(event.target.value)}
              name="Descricao"
            />
          </div>

          <div>
            <ButtonAdicionar disabled={!isValid} nome="Adicionar" />
            {!isValid && <p style={{ color: 'red' }}>Todos os campos devem ser preenchidos</p>}
          </div>



        </form>

      </ModalCampo>
    </>
  )
}

export default ModalCadastroIndicador
