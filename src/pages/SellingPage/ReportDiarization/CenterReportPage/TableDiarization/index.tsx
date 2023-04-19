import { math } from 'polished';
import { useContext, useEffect, useState } from 'react'
import { InContext, useInContext } from '../../../../../context/DataContext';
import { api } from '../../../../../services/api'
import * as XLSX from 'xlsx';

interface TableProps {
  setor: string;
  id_area: number;
  campo_de_resultado: string;
  objetivo_estrategico: string;
  indicadores: string;
  id_indicador: number;
  mes_ano: string;
  meta: number;
  peso: number;
  realizado: number;
}


interface MetasProps {
  nroempresa: number;
  meta_venda: number;
  mes_ano: Date;
  percent_atual?: number | null;
  venda_mes_atual: number;
}

interface VendaProps {
  nroempresa: number;
  venda_meta: number
  percent_total: number;
  total: number;
}

interface DiarizacaoProps {
  nroempresa: number,
  data_venda: string,
  dia_da_semana: string,
  valor_venda: number,
  percentual: number,
  meta_venda: number,
  data_venda_meta: string;
}


import { Container, ContainerTable, ContainerButton } from './styles'
export const TableDiarization = () => {
  const { selectedEmpresa, selectedRightDate } = useContext(InContext);
  const [dadosMetaMes, setDadosMetaMes] = useState<MetasProps | undefined>();
  const [diarizacao, setDiarizacao] = useState<DiarizacaoProps[] | undefined>();
  const [vendas, setVendas] = useState<VendaProps | undefined>();
  const [loadingTable, setLoadingTable] = useState(false);





  useEffect(() => {

    const date = selectedRightDate.split('-');

    const mes = date[1];
    const ano = date[0]
    setLoadingTable(true)
    const pegaDiarizacao = async () => {
      const responseMes = await api.get(`api/painel/vendaMes/${selectedEmpresa}`)
      const responseDiarizacao = await api.post('api/painel/listaDiarizacao', { nroempresa: selectedEmpresa, mes, ano })
      const responseVenda = await api.post('api/painel/listaVenda', { nroempresa: selectedEmpresa, mes, ano })

      if (responseMes && responseDiarizacao) {
        setDadosMetaMes(responseMes.data[0])
        setDiarizacao(responseDiarizacao.data)
        setVendas(responseVenda.data[0])
        setLoadingTable(false);
      }
    }
    pegaDiarizacao()

  }, [selectedEmpresa, selectedRightDate])

  function exportToExcel(data: any, fileName: string) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `diarizacao_empresa_${selectedEmpresa}.xls`);
  }

  const openLink = () => {
    const date = selectedRightDate.split('-');

    const mes = date[1];
    const ano = date[0]
    window.open(`http://192.168.2.70/sistemas/email/rel_metas_mes_mod.php?mes=${mes}&ano=${ano}`, '_blank');
  };

  return (
    <Container>
      <ContainerTable>
        {!!diarizacao && !!vendas ?
          !loadingTable ?
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>VENDA HIST.</th>
                  <th>PART.%</th>
                  <th>VENDA PLANO	</th>
                  <th>PART.%</th>
                </tr>
                <tr>
                  {/*<th>Setor</th>*/}
                  <th>DATA HISTORICO</th>
                  <th>DIA SEMANA</th>
                  <th>DATA ATUAL</th>
                  <th>{Number(vendas?.total).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })}</th>
                  <th>{100}%</th>
                  <th>{Number(vendas?.venda_meta).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })}</th>
                  <th>100%</th>
                </tr>
              </thead>
              <tbody>
                {diarizacao?.map((diariaza: DiarizacaoProps) => (
                  <tr>
                    <td>{diariaza.data_venda}</td>
                    <td>{diariaza.dia_da_semana}</td>
                    <td>{diariaza.data_venda_meta}</td>
                    <td>{Number(diariaza.meta_venda).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })}</td>
                    <td>{diariaza.percentual} %</td>
                    <td>{Number(diariaza.valor_venda).toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })}</td>
                    <td>{diariaza.percentual} %</td>
                  </tr>
                ))
                }

              </tbody>
            </table > : <div style={{ color: '#fff' }}>Carregando diarização....</div> : <div style={{ color: '#fff' }}>Nenhum informação encontrada</div>}
      </ContainerTable>
      <ContainerButton>
        <button disabled={!!loadingTable} onClick={() => exportToExcel(diarizacao, 'dados')}>Exportar para Excel</button>
        <button disabled={!!loadingTable} style={{ background: '#087cc4' }} onClick={() => { openLink() }}>Enviar via Email</button>
      </ContainerButton>

    </Container >
  )
}
