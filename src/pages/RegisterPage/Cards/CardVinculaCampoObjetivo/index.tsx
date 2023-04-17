import React, { useContext, useEffect, useState } from 'react'
import { api } from '../../../../services/api';


interface DadProps {
  id: number;
  id_indicador: number;
  id_area: number;
  mes_ano: string;
  realizado: number;
  meta: number;
  peso: number;
}

import { CadastroOptions, InputContainer, ButtonContainer, SelectModal } from './styles';
//import './styles.css';
export const CardVinculaCampoObjetivo = ({ verifyState }: any) => {
  const [dad, setDad] = useState<DadProps | undefined>();
  const [campoDeResultado, setCampoDeResultado] = useState([]);
  const [selectedCampoDeResultado, setSelectedCampoDeResultado] = useState(null);
  const [objetivoEstrategico, setObjetivoEstrategico] = useState([]);
  const [selectedObjetivoEstrategico, setSelectedObjetivoEstrategico] = useState('');

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const pegaCampoDeResultado = async () => {
      const response = await api.get(`api/crscdr/`);
      setCampoDeResultado(response.data);
      setOptions(response.data);
    }
    pegaCampoDeResultado()
  }, [])
  const campodeResultadoOptions = options.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))

  useEffect(() => {
    const pegaObjetivoEstrategico = async () => {
      const response = await api.get(`api/crsobe/`);
      setObjetivoEstrategico(response.data);
    }
    pegaObjetivoEstrategico()
  }, [])
  const objeticoEstrategicoOptions = objetivoEstrategico.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))

  function handleSelectChange(event: any) {
    setSelectedOption(event.target.value);
  }

  function handleSelectChange2(event: any) {
    setSelectedObjetivoEstrategico(event.target.value);
  }


  return (
    <CadastroOptions estado={verifyState}>
      <h2>Vincule o Campo de Resultado ao Objetivo Estratégico</h2>
      <form action="">
        <InputContainer>
          <div>
            <label htmlFor="">Campo de resultado</label>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value=""></option>
              {campodeResultadoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Objetivo estratégico</label>
            <select value={selectedObjetivoEstrategico} onChange={handleSelectChange2}>
              <option value=""></option>
              {objeticoEstrategicoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </InputContainer>

        {/*<BoxContainer>
          <div>
            <label htmlFor="">desc</label>
            <input
              type="checkbox"
            />
          </div>
        </BoxContainer>*/}



        <ButtonContainer>
          <button style={{ color: '#fff' }} type='submit'>Vincular</button>
        </ButtonContainer>

      </form>
    </CadastroOptions >

  );
};
