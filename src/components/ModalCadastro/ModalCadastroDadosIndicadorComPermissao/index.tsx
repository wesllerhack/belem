import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import ptBR from 'date-fns/locale/pt-BR';
import { isToday, format, parseISO, isAfter } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

import { ButtonAdicionar } from '../../ButtonAdicionar';
import { Input } from '../../Input';
import { IoMdAdd, IoMdClose } from 'react-icons/io'

import { ModalCampo, TitleModal, SelectModal, DataInput, DateSelector } from './styles';
import { InContext } from '../../../context/DataContext';
import { useToast } from '../../../context/toast';
import { api } from '../../../services/api';
import '../styles.css'
import { useAuth } from '../../../context/auth';

interface DadProps {
  id: number;
  id_indicador: number;
  id_area: number;
  mes_ano: string;
  realizado: number;
  meta: number;
  peso: number;
}

export const ModalCadastroDadosIndicadorComPermissao = () => {
  const { setDigitado, permiteCadastro } = useContext(InContext);
  const { user } = useAuth();

  const { id_setor } = user;
  const { addToast } = useToast();

  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);


  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [selectedMeta, setSelectedMeta] = useState('');
  const [selectedRealizado, setSelectedRealizado] = useState('');
  const [selectedPeso, setSelectedPeso] = useState('');
  const [startDate, setStartDate] = useState(firstDay);

  const [dad, setDad] = useState<DadProps | undefined>();
  const [verificarDataCadastrada, setVerificarDataCadastrada] = useState(false)
  const [isValid, setIsValid] = useState(false);

  //-------------------------------------////
  const [setores, setSetores] = useState([]);
  const [selectedSetor, setSelectedSetor] = useState(null);
  const [campoDeResultado, setCampoDeResultado] = useState([]);
  const [selectedCampoDeResultado, setSelectedCampoDeResultado] = useState(null);
  const [objeticoEstrategico, setObjeticoEstrategico] = useState([]);
  const [selectedObjeticoEstrategico, setSelectedObjeticoEstrategico] = useState(null);
  const [indicadores, setIndicadores] = useState([]);
  const [selectedIndicador, setSelectedIndicador] = useState('');


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
    const pegaCampoDeResultado = async () => {
      const response = await api.get(`api/crscdr/${selectedSetor}`);
      setCampoDeResultado(response.data);
    }
    pegaCampoDeResultado()
  }, [selectedSetor])
  const campodeResultadoOptions = campoDeResultado.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))
  useEffect(() => {
    const pegaObjeticoEstrategico = async () => {
      const response = await api.get(`api/crsobe/${selectedCampoDeResultado}`);
      setObjeticoEstrategico(response.data);
    }
    pegaObjeticoEstrategico()
  }, [selectedCampoDeResultado])
  const objeticoEstrategicoOptions = objeticoEstrategico.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))
  useEffect(() => {
    const pegaIndicador = async () => {
      const response = await api.get(`api/crsidc/${selectedObjeticoEstrategico}`);
      setIndicadores(response.data);
    }
    pegaIndicador()
  }, [selectedObjeticoEstrategico])
  const indicadoresOptions = indicadores.map((indicador: any) => ({
    value: indicador?.id,
    label: indicador?.descricao
  }))

  //-----------------------------------------------

  useEffect(() => {
    // If there is data, the form is valid
    console.log('sem permissao')
    setIsValid(
      selectedIndicador &&
        startDate &&
        selectedMeta &&
        selectedPeso
        ? true : false);

  }, [selectedIndicador,
    startDate,
    selectedMeta,
    selectedPeso,
  ]);

  const selectedRightDate = useMemo(() => {
    return format(startDate, 'Y-MM-dd', {
      locale: ptBR,
    });
  }, [startDate]);



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
    const verificaData = async () => {
      try {
        const response = await api.get(`api/crsdad/${selectedIndicador}&${selectedRightDate}`)
        setDad(response.data[0])
        console.log(response.data[0])
      } catch (error) {
        console.log('erro: ', error)
      }
    }
    verificaData()

  }, [selectedIndicador, selectedRightDate])

  useEffect(() => {
    if (dad?.meta || dad?.peso) {
      console.log('desabilita')
      setVerificarDataCadastrada(true)
      setSelectedMeta('');
      setSelectedPeso('');
      setSelectedRealizado('')
      addToast({
        type: 'info',
        title: 'Cadastro já realizado',
        description: 'Já existe um cadastro pra esse indicador nesse mesmo período'
      });
    } else {
      setVerificarDataCadastrada(false)
    }


  }, [dad])


  const handleInsereDadosIndicadores = useCallback(async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    try {
      const res = await api.post(`api/crsdad`,
        {
          id_indicador: selectedIndicador,
          id_area: id_setor,
          mes_ano: selectedRightDate,
          meta: selectedMeta,
          realizado: selectedRealizado,
          peso: selectedPeso,

        }
      )
      setIsOpen(false);
      setSelectedIndicador('');
      setSelectedMeta('');
      setSelectedPeso('');
      setSelectedRealizado('')
      setDigitado(null)
      if (res.status === 201) {
        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso'
        });
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro ao realizar o cadastro',
        description: 'Verifique os dados digitados'
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
              placeholder="Selecione o Setor"
              className="react-select-container"
              classNamePrefix="react-select"
              options={setoresOptions}
              onChange={(as: any) => setSelectedSetor(as.value)}
              required={true}
            />
            <SelectModal
              placeholder="Selecione o Campo de Resultado"
              className="react-select-container"
              classNamePrefix="react-select"
              options={campodeResultadoOptions}
              onChange={(as: any) => setSelectedCampoDeResultado(as.value)}
              required={true}
            />
            <SelectModal
              placeholder="Selecione o Objetico Estrategico"
              className="react-select-container"
              classNamePrefix="react-select"
              options={objeticoEstrategicoOptions}
              onChange={(as: any) => setSelectedObjeticoEstrategico(as.value)}
              required={true}
            />
            <SelectModal
              placeholder="Selecione o Indicador"
              className="react-select-container"
              classNamePrefix="react-select"
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
              value={dad ? dad?.meta : selectedMeta}
              onChange={(event: any) => setSelectedMeta(event.target.value)}
              name="Meta"
              required={false}
              disabled={!!permiteCadastro}
              style={permiteCadastro || verificarDataCadastrada ? { background: '#ccc', cursor: 'not-allowed' } : { background: '#fff' }}
            />
            <Input
              type="float"
              placeholder="Realizado"
              value={dad?.realizado ? dad.realizado : selectedRealizado}
              onChange={(event: any) => setSelectedRealizado(event.target.value)}
              name="Realizado"
              required={false}

              disabled={!!permiteCadastro}
              style={verificarDataCadastrada ? { background: '#ccc', cursor: 'not-allowed' } : { background: '#fff' }}
            />
            <Input
              type="float"
              placeholder="Peso"
              value={dad ? dad?.peso : selectedPeso}
              onChange={(event: any) => setSelectedPeso(event.target.value)}
              name="Peso"
              required={false}
              disabled={verificarDataCadastrada}
              style={verificarDataCadastrada ? { background: '#ccc', cursor: 'not-allowed' } : { background: '#fff' }}
            />

          </div>
          <div>
            <ButtonAdicionar disabled={!isValid || verificarDataCadastrada} nome="Adicionar" />
            {!isValid && <p style={{ color: 'red' }}>Todos os campos devem ser preenchidos</p>}
          </div>

        </form>

      </ModalCampo>
    </>
  )
}

