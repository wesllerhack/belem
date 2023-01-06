import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import ptBR from 'date-fns/locale/pt-BR';
import { isToday, format, parseISO, isAfter } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

import ButtonAdicionar from '../../ButtonAdicionar';
import Input from '../../Input';
import { IoMdAdd, IoMdClose } from 'react-icons/io'



import { ModalCampo, TitleModal, SelectModal, DataInput, DateSelector } from './styles';
import { InContext } from '../../../context/DataContext';
import { useToast } from '../../../context/toast';
import api from '../../../services/api';


const ModalCadastroDadosIndicador = () => {
  const { digitado, setDigitado } = useContext(InContext);
  const { addToast } = useToast();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [indicadores, setIndicadores] = useState([]);
  const [selectedIndicador, setSelectedIndicador] = useState(null);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedMeta, setSelectedMeta] = useState(null);
  const [selectedRealizado, setSelectedRealizado] = useState(null);
  const [selectedPeso, setSelectedPeso] = useState(null);
  const [selectedPonderado, setSelectedPonderado] = useState(null);
  const [startDate, setStartDate] = useState(new Date());


  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // If there is data, the form is valid
    setIsValid(
      selectedIndicador &&
        startDate &&
        selectedMeta &&
        selectedRealizado &&
        selectedPeso &&
        selectedPonderado
        ? true : false);
  }, [selectedIndicador,
    startDate,
    selectedMeta,
    selectedRealizado,
    selectedPeso,
    selectedPonderado]);

  const selectedRightDate = useMemo(() => {
    return format(startDate, 'Y-MM-dd', {
      locale: ptBR,
    });
  }, [startDate]);



  console.log(selectedRightDate)


  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const pegaIndicador = async () => {
      const response = await api.get(`api/crsind/1`);
      setIndicadores(response.data);
    }
    pegaIndicador()
  }, [])

  const indicadoresOptions = indicadores.map((indicador: any) => ({
    value: indicador?.id,
    label: indicador?.descricao
  }))



  const handleInsereDadosIndicadores = useCallback(async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const res = await api.post('api/crsdad',
      {
        id_indicador: selectedIndicador,
        mes_ano: selectedRightDate,
        meta: selectedMeta,
        realizado: selectedRealizado,
        peso: selectedPeso,
      }
    )
    setIsOpen(false);
    setSelectedIndicador(null);
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
  }, [selectedIndicador,
    selectedRightDate,
    selectedMeta,
    selectedRealizado,
    selectedPeso])

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
          <h2 >Cadastre os Dados dos Indicadores</h2>
          <button onClick={closeModal}><IoMdClose /></button>
        </TitleModal>

        <form onSubmit={handleInsereDadosIndicadores}>
          <div>
            <SelectModal
              placeholder="Selecione o Indicador"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'grey' : 'transparent',
                }),
              }}
              options={indicadoresOptions}
              onChange={(as: any) => setSelectedIndicador(as.value)}
              required={true}
            />
            <DataInput>
              <DateSelector
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                locale={ptBR}
                dateFormat="MMMM 'de' yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
                showTwoColumnMonthYearPicker
              />
            </DataInput>

            <Input
              type="float"
              placeholder="Meta"
              onChange={(event: any) => setSelectedMeta(event.target.value)}
              name="Meta"
            />
            <Input
              type="float"
              placeholder="Realizado"
              onChange={(event: any) => setSelectedRealizado(event.target.value)}
              name="Realizado"
            />
            <Input
              type="float"
              placeholder="Peso"
              onChange={(event: any) => setSelectedPeso(event.target.value)}
              name="Peso"
            />
            <Input
              type="float"
              placeholder="Ponderado"
              onChange={(event: any) => setSelectedPonderado(event.target.value)}
              name="Ponderado"
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

export default ModalCadastroDadosIndicador
