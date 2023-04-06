import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useInContext } from '../../context/DataContext';
import { api } from '../../services/api';

import { Container, Selector } from './styles'

interface SetoresProps {
  value: number;
  label: string;
}

export const LojaSelector = () => {
  const navigate = useNavigate()
  const [setores, setSetores] = useState<SetoresProps[]>([]);
  const { setorSelected, setSetorSelected, handleReset, permiteSelecionarSetores } = useInContext();

  useEffect(() => {
    const pegaSetor = async () => {
      const response = await api.get('api/areas');
      if (response.data.status !== 'Token is Expired') {
        setSetores(response.data);
      } else {
        navigate('/')
      }
    }
    pegaSetor()
  }, [])

  const setoresOptions = setores.map((setor: any) => ({
    value: setor?.id,
    label: setor?.descricao
  }))

  return (
    <Container >
      <Selector
        isDisabled={!!permiteSelecionarSetores}
        placeholder={!setorSelected.label ? "Selecione a Loja" : setorSelected.label}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'transparent',
            color: state.isFocused ? 'blue' : 'blue',
            backgroundColor: 'transparent'
          }),
        }}
        options={setoresOptions}
        onChange={(set: any) => { setSetorSelected(set); handleReset() }}
        required={true}
      />
    </Container>
  )
}
