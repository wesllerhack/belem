import React, { useEffect, useState } from 'react'
import api from '../../services/api';

import { Container, Selector } from './styles'

const SetorSelector = () => {
  const [setores, setSetores] = useState([]);
  const [selectedSetor, setSelectedSetor] = useState(null);

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


  return (
    <Container>
      <Selector
        placeholder="Selecione o Setor"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'transparent',
            color: state.isFocused ? 'blue' : 'blue',
            backgroundColor: 'transparent'
          }),
        }}
        options={setoresOptions}
        onChange={() => { }}
        required={true}
      />
    </Container>
  )
}

export default SetorSelector
