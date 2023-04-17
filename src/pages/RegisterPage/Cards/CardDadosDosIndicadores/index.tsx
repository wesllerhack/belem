import React, { useContext, useEffect, useState } from 'react'
import { SelectPeriodoCadastro } from '../../../../components/SelectPeriodoCadastro';
import { SetorSelector } from '../../../../components/SetorSelector';
import { api } from '../../../../services/api';




import { CadastroOptions, InputContainer, SingleInputContainer, DataInputContainer, ButtonContainer } from './styles';
export const CardDadosIndicador = ({ verifyState }: any) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const pegaCampoDeResultado = async () => {
      const response = await api.get(`api/crscdr/`);
      //setCampoDeResultado(response.data);
      setOptions(response.data);
    }
    pegaCampoDeResultado()
  }, [])
  const campodeResultadoOptions = options.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))

  function handleSelectChange(event: any) {
    setSelectedOption(event.target.value);
  }

  return (
    <CadastroOptions estado={verifyState}>
      <h2>Cadastro de Dados dos Indicadores</h2>
      <form action="">
        <InputContainer>
          <SingleInputContainer>
            <label htmlFor="">Setor</label>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value=""></option>
              {campodeResultadoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SingleInputContainer>
          <SingleInputContainer>
            <label htmlFor="">Indicador</label>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value=""></option>
              {campodeResultadoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SingleInputContainer>

          <DataInputContainer >
            <label htmlFor="">Mês</label>
            <SelectPeriodoCadastro disabled={false} />
          </DataInputContainer>
          <SingleInputContainer>
            <label htmlFor="">Realizado</label>
            <input type="text" />
          </SingleInputContainer>
          <SingleInputContainer>
            <label htmlFor="">Meta</label>
            <input type="text" />
          </SingleInputContainer>
          <SingleInputContainer>
            <label htmlFor="">Peso</label>
            <input type="text" />
          </SingleInputContainer>
        </InputContainer>




        <ButtonContainer>
          <button style={{ color: '#fff' }} type='submit'>Salvar</button>
        </ButtonContainer>

      </form>
    </CadastroOptions >

  );
};
