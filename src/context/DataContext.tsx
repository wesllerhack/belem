import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react'

interface InContextData {
  setObjetivo: any;
  objetivo: any;
  indicador: any;
  setIndicador: any;
  dadosIndicador: any;
  setDadosIndicador: any;
  objetivoAtual: any;
  setObjetivoAtual: any;
  indicadorAtual: any;
  setIndicadorAtual: any;
  digitado: any;
  setDigitado: any;
  isSelected: Number;
  setIsSelected: any;
  verifyAnimation: any;
  setVerifyAnimation: any;
}



export const InContext = createContext<InContextData>({} as InContextData);

export const DataContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [objetivo, setObjetivo] = useState([]);
  const [indicador, setIndicador] = useState([]);
  const [dadosIndicador, setDadosIndicador] = useState([]);

  const [objetivoAtual, setObjetivoAtual] = useState(0);
  const [indicadorAtual, setIndicadorAtual] = useState(0);

  const [digitado, setDigitado] = useState('');
  const [isSelected, setIsSelected] = useState(1);

  const [verifyAnimation, setVerifyAnimation] = useState(false);


  return (
    <InContext.Provider
      value={{
        objetivo,
        setObjetivo,
        indicador,
        setIndicador,
        dadosIndicador,
        setDadosIndicador,
        objetivoAtual,
        setObjetivoAtual,
        indicadorAtual,
        setIndicadorAtual,
        digitado,
        setDigitado,
        isSelected,
        setIsSelected,
        verifyAnimation,
        setVerifyAnimation
      }}
    >
      {children}
    </InContext.Provider>
  )
}

export function useInContext(): InContextData {
  const context = useContext(InContext);

  if (!context) {
    throw new Error('useAuth must be within a AuthProvider');
  }

  return context;
}
