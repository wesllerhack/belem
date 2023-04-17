import { useContext, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ReactLoading from 'react-loading';
import { InContext } from '../../../../context/DataContext';
import { api } from '../../../../services/api';
import { Container, LoadingResults } from './styles'

interface MetasProps {
  nroempresa: number;
  meta_venda: number;
  mes_ano: Date;
  percent_atual?: number | null;
  venda_mes_atual: number;
}

interface MetasDiaProps {
  nroempresa: number;
  meta_venda: number;
  vendas_hoje: Date;
  percent_atual?: number | null;
}

export const VendaMetaPainelTV = () => {
  const { selectedEmpresa, loadingPainel, setLoadingPainel } = useContext(InContext);
  const [dadosMetaMes, setDadosMetaMes] = useState<MetasProps | undefined>();
  const [dadosMetaDia, setDadosMetaDia] = useState<MetasDiaProps | undefined>();


  useEffect(() => {
    const pegaMeta = async () => {
      setLoadingPainel(true)

      const responseMes = await api.get(`api/painel/vendaMes/${selectedEmpresa}`)
      const responseDia = await api.get(`api/painel/vendaDia/${selectedEmpresa}`)
      setDadosMetaMes(responseMes.data[0])
      setDadosMetaDia(responseDia.data[0])
      console.log(dadosMetaDia)

    }

    pegaMeta()
    const interval = setInterval(() => {
      pegaMeta()

      setLoadingPainel(false)
    }, 10000);

    return () => clearInterval(interval);
  }, [selectedEmpresa])


  return (

    <Container>{/*!loadingPainel ? <>*/}
      <div style={{ width: '30vw', height: '30vw' }}>
        <h2>Percentual realizado da Meta do Mês</h2>
        {!loadingPainel || !dadosMetaMes ?
          (!!dadosMetaMes ? <><CircularProgressbar
            value={!!dadosMetaMes?.percent_atual ? dadosMetaMes?.percent_atual : 0}
            text={`${!!dadosMetaMes?.percent_atual ? Number(dadosMetaMes?.percent_atual) : '0'}%`}
            styles={buildStyles(
              !!(Number(dadosMetaMes?.venda_mes_atual) >= Number(dadosMetaMes?.meta_venda)) &&
              {
                pathColor: 'green',
                textSize: '1.50rem',
                textColor: '#000'
              } ||
              {
                pathColor: 'red',
                textSize: '1.50rem',
                textColor: '#000'
              })}
          /></> :
            <CircularProgressbar
              value={0}
              text={`0%`}
              styles={buildStyles({

                pathColor: 'red',
                textSize: '1.50rem',
                textColor: '#000'
              })}
            />)
          : <><LoadingResults><ReactLoading type="spin" color="#25316D" height={'30vh'} width={'30vw'} /><span>carregando....</span></LoadingResults></>}
      </div>

      <div style={{ width: '30vw', height: '30vw' }}>
        <h2>Percentual realizado da Meta do Dia</h2>
        {!loadingPainel || !dadosMetaDia ?
          (!!dadosMetaDia ? <><CircularProgressbar
            value={Number(dadosMetaDia?.percent_atual)}
            text={`${dadosMetaDia?.percent_atual ? Number(dadosMetaDia?.percent_atual) : '0'}%`}
            styles={buildStyles(
              !!(Number(dadosMetaDia?.vendas_hoje) >= Number(dadosMetaDia?.meta_venda)) &&
              {
                pathColor: 'green',
                textSize: '1.50rem',
                textColor: '#000'
              } ||
              {
                pathColor: 'red',
                textSize: '1.50rem',
                textColor: '#000'
              })}
          /></> :
            <CircularProgressbar
              value={0}
              text={`0%`}
              styles={buildStyles({

                pathColor: 'red',
                textSize: '1.50rem',
                textColor: '#000'
              })}
            />)
          : <><LoadingResults><ReactLoading type="spin" color="#25316D" height={'30vh'} width={'30vw'} /><span>carregando....</span></LoadingResults></>}
      </div>
    </Container >
  )
}
