import { useEffect, useState } from 'react';
import { number } from 'yup';
import { useInContext } from '../../context/DataContext';
import { api } from '../../services/api';
import { Container } from './styles'

interface TableProps {
  setor: string;
  id_area: number;
  campo_de_resultados: string;
  objetivo_estrategico: string;
  indicadores: string;
  id_indicador: number;
  mes_ano: string;
  meta: number;
  peso: number;
  realizado: number;
}

export const TableFooter = () => {
  const { setorSelected, selectedRightDate } = useInContext();
  const [dataTable, setDataTable] = useState<TableProps[]>([])

  useEffect(() => {

    async function loadTableSetor() {
      try {
        const response = await api.get(`api/consolidado/${setorSelected.value}&${selectedRightDate}`);
        setDataTable(response.data)
      } catch (error) {
        setDataTable([])
      }
    }
    if (!!setorSelected) {
      loadTableSetor()
    }
  }, [setorSelected, selectedRightDate])

  const totalPonderado = dataTable.reduce(function (accumulator, object) {
    return accumulator + Math.round((object.realizado / object.meta) * object.peso)
  }, 0);


  return (
    <Container style={
      !!(totalPonderado == 0) &&
      { background: '#25316D' } ||
      !!(totalPonderado <= 90) &&
      //console.log('vermelho');
      { background: '#ff0000' } ||
      !!(totalPonderado <= 95) &&
      //console.log('amarelo')
      { background: '#ffff00' } ||
      !!(totalPonderado <= 100) &&
      //console.log('verde')
      { background: '#00ff00' } ||
      //!!(totalPonderado > dad.peso) &&
      //console.log('azul')
      { background: '#00b0f0' }
    }
    >
      <div
      >
        <span>DESEMPENHO DO SETOR / PROFISSIONAL NO PERÍODO</span>
        <p>{totalPonderado}%</p>
      </div>
    </Container>
  )
}
