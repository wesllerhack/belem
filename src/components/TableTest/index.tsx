import React from 'react'

import { useTable } from 'react-table'

import dados2 from '../../dados2'

import { Container } from './styles'
const Table = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Setor</th>
            <th>Campo de resultados</th>
            <th>Objetico Estratégico</th>
            <th>Indicador</th>
            <th>realizado 2022</th>
            <th>Meta</th>
            <th>Realizado</th>
            <th>Peso</th>
            <th>Ponderado</th>
          </tr>
        </thead>
        <tbody>
          {
            dados2.map((dad: any, index: any) => (
              <tr key={index}>
                <td>{dad.setor}</td>
                <td>{dad.descricao}</td>
                <td>{dad.descricao_obje}</td>
                <td>{dad.descricao_ind}</td>
                <td>{dad.realizado1}</td>
                <td>{dad.meta}</td>
                <td>{dad.realizado2}</td>
                <td>{dad.peso}</td>
                <td>{dad.ponderacao}</td>
              </tr>

            ))
          }

        </tbody>
      </table >

    </Container >
  )
}

export default Table
