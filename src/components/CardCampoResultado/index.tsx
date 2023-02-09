import { useInContext } from '../../context/DataContext.js';
import { useToast } from '../../context/toast.js';
import { Container, Content, Title, PercentSquare, ContentBar } from './styles'
import ProgressBar from "@ramonak/react-progress-bar";
import { api } from '../../services/api.js';
import { useEffect, useState } from 'react';

interface AtingidoProps {
  campo_de_resultado: string;
  id_campo: number;
  meta: number;
  peso: number;
  ponderado: number;
}

interface MergedProps {
  id: number;
  crsobjetivoestrategico: Object;
  color: string;
  id_area: number;
  campo_de_resultado: string;
  id_campo: number;
  meta: number;
  peso: number;
  ponderado: number;
}

export const CardCampoResultados = () => {
  const { addToast } = useToast()
  const { dadosApi, handleData, handleReset, setorSelected, selectedRightDate } = useInContext();
  const [atingido, setAtingido] = useState<AtingidoProps[]>([]);

  useEffect(() => {
    const loadAtingido = async () => {
      const response = await api.get(`api/cdrtotal/${setorSelected.value}&${selectedRightDate}`);
      setAtingido(response.data)
    }
    if (!!setorSelected && !!selectedRightDate) {
      loadAtingido()
    }
  }, [setorSelected, selectedRightDate])

  const merged = dadosApi.map((screen) => ({
    ...atingido.find((o) => o.id_campo === screen.id),
    ...screen
  }));


  return (
    <>
      {merged.map((value: any, index: number) => (
        <Container
          key={index}
          style={{ background: value.color }}
          onClick={() => {
            if (value.crsobjetivoestrategico[0] != undefined) {
              if (value.crsobjetivoestrategico[0].crsindicador[0] != undefined) {
                if (!!value.crsobjetivoestrategico[0].crsindicador[0].crs_dados) {
                  console.log(value.crsobjetivoestrategico[0])

                  handleData(
                    value.crsobjetivoestrategico,
                    value.crsobjetivoestrategico[0].crsindicador,
                    value.crsobjetivoestrategico[0].crsindicador[0].crs_dados
                  )
                } else {
                  handleReset();
                  addToast({
                    type: 'error',
                    title: 'Erro ao selecionar Campo de resultado',
                    description: 'Falta realizar cadastro dos Dados dos indicadores)'
                  });
                }
              } else {
                handleReset();
                addToast({
                  type: 'error',
                  title: 'Erro ao selecionar Campo de resultado',
                  description: 'Falta realizar cadastro dos Indicadores e Dados dos indicadores)'
                });
              }
            } else {
              handleReset();
              addToast({
                type: 'error',
                title: 'Erro ao selecionar Campo de resultado',
                description: 'Falta realizar cadastro do Objetico Estratégico, Indicadores e Dados dos indicadores)'
              });
            }
          }}
        >
          <Content >
            <Title>
              {/* o Icone vai aqui */}
              <h2>{value.descricao}</h2>
            </Title>
            <PercentSquare>
              <div>{!!value.peso ? Math.round((100 * value.ponderado) / value.peso) : 0}%</div>
              <p>atingido</p>
            </PercentSquare>
          </Content>
          <ContentBar>
            <ProgressBar
              className="wrapper"
              completed={!!value.peso ? Math.round((100 * value.ponderado) / value.peso) : 0}
              bgColor={'#fff'}
              baseBgColor={'#acacacc3'}
              labelColor={'#000'}
            />
          </ContentBar>
        </Container>
      ))
      }
    </>
  )
}
