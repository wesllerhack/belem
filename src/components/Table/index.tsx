import { useEffect, useState } from 'react'
import { useInContext } from '../../context/DataContext';
import { api } from '../../services/api'

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

import { Container } from './styles'
export const Table = () => {
  const { setorSelected, selectedRightDate } = useInContext();
  const [dataTable, setDataTable] = useState<TableProps[]>([])

  useEffect(() => {

    async function loadTableSetor() {
      try {
        const response = await api.get(`api/consolidado/${setorSelected.value}&${selectedRightDate}`);
        setDataTable(response.data)
      } catch (error) {
        setDataTable([])
        console.log('erro: ', error)
      }
    }
    if (!!setorSelected) {
      loadTableSetor()
    }
  }, [setorSelected, selectedRightDate])


  return (
    <Container>
      <table>
        <thead>
          <tr>
            {/*<th>Setor</th>*/}
            <th>Campo de resultados</th>
            <th>Objetico Estratégico</th>
            <th>Indicador</th>
            <th>Realizado (ano)</th>
            <th>Meta</th>
            <th>Realizado</th>
            <th>Peso</th>
            <th>Ponderado</th>
          </tr>
        </thead>
        <tbody>
          {!!dataTable ?
            dataTable.map((dad: TableProps, index: any) => (
              <tr key={index}>
                {/*<td>{dad.setor}</td>*/}
                <td>{dad.campo_de_resultado}</td>
                <td>{dad.objetivo_estrategico}</td>
                <td>{dad.indicadores}</td>
                <td>{((95 * dad.peso) / 100)}</td>
                <td>{dad.meta}</td>
                <td>{dad.realizado}</td>
                <td>{dad.peso}%</td>
                <td style={
                  !!(Math.round((dad.realizado / dad.meta) * dad.peso) <= ((90 * dad.peso) / 100)) &&
                  //console.log('vermelho');
                  { background: '#ff0000' } ||
                  !!(Math.round((dad.realizado / dad.meta) * dad.peso) <= ((95 * dad.peso) / 100)) &&
                  //console.log('amarelo')
                  { background: '#ffff00' } ||
                  !!(Math.round((dad.realizado / dad.meta) * dad.peso) <= ((100 * dad.peso) / 100)) &&
                  //console.log('verde')
                  { background: '#00ff00' } ||
                  //!!(Math.round((dad.realizado / dad.meta) * dad.peso) > dad.peso) &&
                  //console.log('azul')
                  { background: '#00b0f0' }
                }
                >{Math.round((dad.realizado / dad.meta) * dad.peso)}%
                </td>
                {/*
                  if(!!(Math.round((dad.meta / dad.realizado) * dad.peso) > dad.peso)){
                    console.log('azul')
                  } else if(!!(Math.round((dad.meta / dad.realizado) * dad.peso) >= ((95 * dad.peso) / 100))){
                    console.log('verde')
                  } else if(!!(Math.round((dad.meta / dad.realizado) * dad.peso) >= ((95 * dad.peso) / 100))){
                    console.log('amarelo')
                  } else {
                    console.log('vermelho')*/
                }
                {/*
                    <td style={!(Math.round((dad.meta / dad.realizado) * dad.peso)) ?
                      { background: '#fff' } :
                      { background: '#00b0f0' }}
                    >
                      {Math.round((dad.meta / dad.realizado) * dad.peso)}
                                  </td>*/}
              </tr>

            )) : <h1>Nenhum dado cadastrado no setor nesse periodo</h1>
          }

        </tbody>

      </table >
    </Container >
  )
}
