import React, { useContext, useEffect, useState } from 'react'
import { api } from '../../../../services/api';




import { CadastroOptions, InputContainer, ButtonContainer } from './styles';
export const CardIndicador = ({ verifyState }: any) => {
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
      <h2>Cadastro de Indicador</h2>
      <form action="">
        <InputContainer>
          <div>
            <label htmlFor="">Setor</label>
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
            <label htmlFor="">Objetivo Estratégico</label>
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
            <label htmlFor="">Descrição</label>
            <input type="text" />
          </div>
        </InputContainer>




        <ButtonContainer>
          <button style={{ color: '#fff' }} type='submit'>Salvar</button>
        </ButtonContainer>

      </form>
    </CadastroOptions >

  );
};
