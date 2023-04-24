import { useContext, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ReactLoading from 'react-loading';
import Loading from 'react-loading';
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
  venda_hoje: Date;
  percent_atual?: number | null;
}

export const VendaMeta = () => {
  const { selectedEmpresa, loadingPainel, setLoadingPainel, visualizaValor } = useContext(InContext);
  const [dadosMetaMes, setDadosMetaMes] = useState<MetasProps | undefined>();
  const [dadosMetaDia, setDadosMetaDia] = useState<MetasDiaProps | undefined>();


  useEffect(() => {
    setLoadingPainel(true)

    const pegaMeta = async () => {
      const responseMes = await api.get(`api/painel/vendaMes/${selectedEmpresa}`)
      const responseDia = await api.get(`api/painel/vendaDia/${selectedEmpresa}`)

      if (responseDia && responseMes) {
        setDadosMetaDia(responseDia.data[0])
        setDadosMetaMes(responseMes.data[0])
        setLoadingPainel(false);
      }
    }
    const intervalId = setInterval(() => {
      pegaMeta()
    }, 18000);

    return () => clearInterval(intervalId);

  }, [selectedEmpresa])

  return (

    <Container>{/*!loadingPainel ? <>*/}
      <div style={{ width: '30vw', height: '30vw' }}>
        <h2>Percentual realizado da Meta de vendas do Mês</h2>
        {!loadingPainel ?
          (!!dadosMetaMes ? <>
            {!!visualizaValor ?
              (<span>Meta: {Number(dadosMetaMes.meta_venda).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })}</span>) :
              (<span>&nbsp;</span>)}
            <CircularProgressbar
              value={!!dadosMetaMes?.percent_atual ? dadosMetaMes?.percent_atual : 0}
              text={`${!!dadosMetaMes?.percent_atual ? !visualizaValor ? Number(dadosMetaMes?.percent_atual) + `%` : Number(dadosMetaMes?.venda_mes_atual).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` }) : '0'}`}
              styles={buildStyles(
                !visualizaValor ?
                  !!(Number(dadosMetaMes?.venda_mes_atual) >= Number(dadosMetaMes?.meta_venda)) &&
                  {
                    pathColor: 'green',
                    textSize: '1.25rem',
                    textColor: '#000'
                  } ||
                  {
                    pathColor: 'red',
                    textSize: '1.25rem',
                    textColor: '#000'
                  } :
                  !!(Number(dadosMetaMes?.venda_mes_atual) >= Number(dadosMetaMes?.meta_venda)) &&
                  {
                    pathColor: 'green',
                    textSize: '0.70rem',
                    textColor: '#000'
                  } ||
                  {
                    pathColor: 'red',
                    textSize: '0.70rem',
                    textColor: '#000'
                  }
              )}
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
          : <><LoadingResults><span>&nbsp;</span><ReactLoading type="spin" color="#25316D" height={'30vh'} width={'30vw'} /><span>carregando....</span></LoadingResults></>}
      </div>

      <div style={{ width: '30vw', height: '30vw' }}>
        <h2>Percentual realizado da meta do Dia</h2>
        {!loadingPainel ?
          (!!dadosMetaDia ? <>
            {!!visualizaValor ?
              (<span>Meta: {Number(dadosMetaDia.meta_venda).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })}</span>) :
              (<span>&nbsp;</span>)}
            <CircularProgressbar
              value={Number(dadosMetaDia?.percent_atual)}
              text={`${!!dadosMetaDia?.percent_atual
                ?
                !visualizaValor ?
                  Number(dadosMetaDia?.percent_atual) + `%` :
                  Number(dadosMetaDia?.venda_hoje).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })
                : '0'}`}
              styles={buildStyles(
                !visualizaValor ?
                  !!(Number(dadosMetaDia?.venda_hoje) >= Number(dadosMetaDia?.meta_venda)) &&
                  {
                    pathColor: 'green',
                    textSize: '1.25rem',
                    textColor: '#000'
                  } ||
                  {
                    pathColor: 'red',
                    textSize: '1.25rem',
                    textColor: '#000'
                  } :
                  !!(Number(dadosMetaDia?.venda_hoje) >= Number(dadosMetaDia?.meta_venda)) &&
                  {
                    pathColor: 'green',
                    textSize: '0.70rem',
                    textColor: '#000'
                  } ||
                  {
                    pathColor: 'red',
                    textSize: '0.70rem',
                    textColor: '#000'
                  }
              )}
            /></> :
            <CircularProgressbar
              value={0}
              text={`0%`}
              styles={buildStyles({

                pathColor: 'red',
                textSize: '1.25rem',
                textColor: '#000'
              })}
            />)
          : <><LoadingResults><span>&nbsp;</span><ReactLoading type="spin" color="#25316D" height={'30vh'} width={'30vw'} /><span>carregando....</span></LoadingResults></>}

      </div>
    </Container >
  )
}
