import React, { createContext, PropsWithChildren, useMemo, useCallback, useContext, useEffect, useState } from 'react'
import { isToday, format, parseISO, isAfter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { api } from '../services/api';
import { useAuth } from './auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from './toast';

interface InContextData {
  dadosApi: DadosApiProps[]
  objetivo: ObjetivoEstrategicoProps[];
  indicador: IndicadorProps[];
  dadosIndicador: DadosIndicadorProps;
  objetivoAtual: number;
  indicadorAtual: number;
  digitado: string;
  isSelected: Number;
  verifyAnimation: any;
  setorSelected: SetorSelectedProps;
  infoUser: InfoUserProps;
  selectedDate: Date;
  selectedRightDate: string;
  loading: Boolean;
  permiteCadastro: Boolean;
  permiteSelecionarSetores: Boolean;
  selectedEmpresa: number | undefined | null;
  empresas: EmpresaProps[];
  visualizaValor: Boolean;

  setSelectedDate: any;
  setObjetivo: any;
  setObjetivoAtual: any;
  setIndicador: any;
  setIndicadorAtual: any;
  setDadosIndicador: any;
  setIsSelected: any;
  setDigitado: any;
  setSetorSelected: any;
  setVerifyAnimation: any;
  loadingPainel: any;
  setLoadingPainel: any;

  handleData: (objetivo: ObjetivoEstrategicoProps[], indicador: IndicadorProps[], dadosIndicador: DadosIndicadorProps) => void
  handleSelectedEmpresa: (recebeEmpresa: number) => void
  handleActualDate: () => void
  handleReset: () => void
  handleLoading: () => void
  disableLoading: () => void
  handleVisualizaValor: (event: any) => void

}

interface EmpresaProps {
  nroempresa: number;
  nomereduzido: string;
  status: string;
}


interface DadosApiProps {
  id: number;
  id_area: number;
  descricao: string;
  crsobjetivoestrategico: ObjetivoEstrategicoProps[];
}
interface SetorProps {
  id_setor: number;
  setor: string;
}

interface SetorSelectedProps {
  value: number;
  label: string;
}

interface InfoUserProps {
  id_setor: number;
  setor: string;
  id_cargo: number;
  cargo: string;
  id_lider: number;
  lider: string;
}

interface ObjetivoEstrategicoProps {
  id: number,
  descricao: string,
  crsindicador: IndicadorProps
}

interface IndicadorProps {
  id: number,
  descricao: string,
  crs_dados: DadosIndicadorProps
}

interface DadosIndicadorProps {
  id: number,
  id_area: number,
  mes_ano: string,
  realizado: number,
  meta: number,
  peso: number,
}


export const InContext = createContext<InContextData>({} as InContextData);

export const DataContext: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToast } = useToast();

  const { user, loginStatus } = useAuth()

  const [dadosApi, setDadosApi] = useState([]);

  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);


  const [objetivo, setObjetivo] = useState<ObjetivoEstrategicoProps[]>([]);
  const [indicador, setIndicador] = useState<IndicadorProps[]>([]);
  const [dadosIndicador, setDadosIndicador] = useState<DadosIndicadorProps>({} as DadosIndicadorProps);
  const [loading, setLoading] = useState(false);

  const [loadingPainel, setLoadingPainel] = useState(false);
  const [visualizaValor, setVisualizaValor] = useState(false);


  const [permiteCadastro, setPermiteCadastro] = useState(false);
  const [permiteSelecionarSetores, setPermiteSelecionarSetores] = useState(false);

  const [objetivoAtual, setObjetivoAtual] = useState(0);
  const [indicadorAtual, setIndicadorAtual] = useState(0);

  const [selectedDate, setSelectedDate] = useState(firstDay);

  const [setorSelected, setSetorSelected] = useState({} as SetorSelectedProps);
  const [infoUser, setInfoUser] = useState({} as InfoUserProps);

  const [digitado, setDigitado] = useState('');
  const [isSelected, setIsSelected] = useState(1);

  const [verifyAnimation, setVerifyAnimation] = useState(false);

  const [empresas, setEmpresas] = useState<EmpresaProps[]>([]);
  const [selectedEmpresa, setSelectedEmpresa] = useState(0);

  const handleSelectedEmpresa = useCallback((recebeEmpresa: any) => {
    setSelectedEmpresa(recebeEmpresa)
  }, [selectedEmpresa])

  const handleVisualizaValor = (event: any) => {
    event.preventDefault();
    setVisualizaValor(state => !state)
  }

  const handleActualDate = useCallback(() => {
    setSelectedDate(firstDay)
  }, [])



  const handleLoading = useCallback(() => {
    setLoading(true);
  }, [setLoading])

  const disableLoading = useCallback(() => {
    setLoading(false);
  }, [setLoading])

  if (loginStatus == 401 || loginStatus == 429) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  useEffect(() => {
    if (location.pathname == '/') {
      setIsSelected(1)
    } else if (location.pathname == '/dashboard') {
      setIsSelected(1)
    } else if (location.pathname == '/consolidado') {
      setIsSelected(2)
    } else if (location.pathname == '/cadastro') {
      setIsSelected(3)
    } else if (location.pathname == '/perfil') {
      setIsSelected(4)
    }
  }, [location.pathname])

  useEffect(() => {
    //setLoading(true)
    async function loadCardSetor() {
      try {
        //const response = await api.get(`api/crscdr/${setorSelected.value}`);
        //setDadosApi(response.data)
        setLoading(false)
      } catch (error) {
        console.log('erro: ', error)
      }
    }
    if (!!setorSelected) {
      // loadCardSetor()
    }

  }, [setorSelected])

  useEffect(() => {
    const pegaSetor = async () => {
      try {
        const response = await api.get(`api/userInfo/${user.id_setor}&${user.id_cargo}&${user.id_lider_imediato}`);

        const setorFormated = response.data.map((selectSetor: SetorProps) => ({
          value: selectSetor?.id_setor,
          label: selectSetor?.setor
        }))
        setSetorSelected(setorFormated[0])
        setInfoUser(response.data[0])
      } catch (error) {
        console.log('erro: ', error)

        localStorage.removeItem('@CRS:token');
        localStorage.removeItem('@CRS:user');

        navigate('/');
        setLoading(false)
        addToast({
          type: 'error',
          title: 'Erro ao realizar login',
          description: 'Seu login está incompleto, favor entrar em contato com o administrador para verifica-lo'
        });

      }
    }
    if (!!user) {
      pegaSetor()
    }
  }, [user])


  const handleData = useCallback((objetivo: ObjetivoEstrategicoProps[], indicador: IndicadorProps[], dadosIndicador: DadosIndicadorProps) => {
    setObjetivoAtual(0)
    setObjetivo(objetivo);
    setIndicadorAtual(0)
    setIndicador(indicador);
    setDadosIndicador(dadosIndicador);
  }, []);

  const handleReset = useCallback(() => {
    setObjetivo([])
    setIndicador([])
    setDadosIndicador({
      id: 0,
      id_area: 0,
      mes_ano: "Não Cadastrado",
      realizado: 0,
      meta: 0,
      peso: 0
    })
  }, [])


  const selectedRightDate = useMemo(() => {
    return format(selectedDate, 'Y-MM-dd', {
      locale: ptBR,
    });
  }, [selectedDate]);


  useEffect(() => {
    if (!!user) {
      if (!(user.is_admin == 1)) {
        setPermiteCadastro(true)
      } else {
        setPermiteCadastro(false)
      }
      if (!(user.is_admin == 1)) {
        setPermiteSelecionarSetores(true)
      } else {
        setPermiteSelecionarSetores(false)
      }
      setSelectedEmpresa(user.id_filial)
    }

  }, [user])


  useEffect(() => {
    if (user) {
      setLoading(true)
      const pegaEmpresas = async () => {
        try {

          const response = await api.get(`api/painel/filiais`);
          setEmpresas(response.data);

          setLoading(false)
        } catch (error) {
          console.log('erro: ', error)
        }
      }
      pegaEmpresas()
    }
  }, [user])


  return (
    <InContext.Provider
      value={{
        dadosApi,
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
        setVerifyAnimation,
        setorSelected,
        infoUser,
        setSetorSelected,
        handleData,
        handleReset,
        selectedDate,
        setSelectedDate,
        selectedRightDate,
        loading,
        handleLoading,
        disableLoading,
        permiteCadastro,
        permiteSelecionarSetores,
        handleSelectedEmpresa,
        selectedEmpresa,
        empresas,
        visualizaValor,
        handleVisualizaValor,
        handleActualDate,

        loadingPainel,
        setLoadingPainel,
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
