import { SelectPeriodo } from '../../../components/SelectPeriodo';
import { CardCampoResultados } from '../../../components/CardCampoResultado';
import { SetorSelector } from '../../../components/SetorSelector';

import { Container, SubHeader } from './styles';
import { useEffect } from 'react';
import { useContext } from 'react';
import { InContext } from '../../../context/DataContext';

export const CenterMainPage = () => {
  const { verifyAnimation, setVerifyAnimation } = useContext(InContext);

  useEffect(() => {
    if (verifyAnimation === true) {
      const timer = setTimeout(() => {
        setVerifyAnimation(false)
      }, 1000);
    }
  }, [])


  return (
    <Container verify={verifyAnimation}>
      <h1>Campo de Resultados</h1>
      <SubHeader>
        <SelectPeriodo disabled={false} />
        <SetorSelector />
      </SubHeader>
      <CardCampoResultados />
    </Container>
  );
};
