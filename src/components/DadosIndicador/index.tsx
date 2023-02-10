import React, { useContext } from 'react'

import { FiTarget } from 'react-icons/fi'
import { GrCompliance, GrTask } from 'react-icons/gr'
import { GiWeight } from 'react-icons/gi'
import { MdAutoGraph } from 'react-icons/md'

import { InContext } from '../../context/DataContext.js';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container, Content, Dados, Indicador, Percent } from './styles'

export const DadosIndicador = () => {
  const { dadosIndicador, setDadosIndicador } = useContext(InContext);

  if (dadosIndicador == null) {
    setDadosIndicador({
      id: 0,
      id_area: 0,
      mes_ano: "Não Cadastrado",
      realizado: 0,
      meta: 0,
      peso: 0
    })
  }

  const ponderado = Math.round((dadosIndicador.realizado / dadosIndicador.meta) * dadosIndicador.peso)

  //const percentage = 65;
  return (
    <Container>
      <h2>Dados dos Indicadores</h2>
      <Content>
        <Dados>
          <Indicador>
            <GrCompliance />
            <div>Realizado (ano anterior)</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={0}
              text={`0%`}
              styles={buildStyles({
                pathColor: '#25316D',
                textSize: '30px',
                textColor: '#000'
              })}
            />
          </Percent>
        </Dados>
        <Dados>
          <Indicador>
            <FiTarget />
            <div>Meta</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={!!dadosIndicador.meta ? dadosIndicador.meta : 0}
              text={`${!!dadosIndicador.meta ? dadosIndicador.meta : 0}%`}
              styles={buildStyles({
                pathColor: '#25316D',
                textSize: '30px',
                textColor: '#000'
              })}
            />
          </Percent>
        </Dados>
        <Dados>
          <Indicador>
            <GrTask />
            <div>Realizado</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={!!dadosIndicador.realizado ? dadosIndicador.realizado : 0}
              text={`${!!dadosIndicador.realizado ? dadosIndicador.realizado : 0}%`}
              styles={buildStyles({
                pathColor: '#25316D',
                textSize: '30px',
                textColor: '#000'
              })}
            />
          </Percent>
        </Dados>
        <Dados>
          <Indicador>
            <GiWeight />
            <div>Peso</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={!!dadosIndicador.peso ? dadosIndicador.peso : 0}
              text={`${!!dadosIndicador.peso ? dadosIndicador.peso : 0}%`}
              styles={buildStyles({
                pathColor: '#25316D',
                textSize: '30px',
                textColor: '#000'
              })}
            />
          </Percent>
        </Dados>{
          <Dados>
            <Indicador>
              <MdAutoGraph />
              <div>Ponderado</div>
            </Indicador>
            <Percent>
              <CircularProgressbar
                value={!!ponderado ? ponderado : 0}
                text={`${!!ponderado ? ponderado : 0}%`}
                styles={buildStyles({
                  pathColor: !!(ponderado <= ((90 * dadosIndicador.peso) / 100)) &&
                    //console.log('vermelho');
                    '#ff0000' ||
                    !!(ponderado <= ((95 * dadosIndicador.peso) / 100)) &&
                    //console.log('amarelo')
                    '#ffff00' ||
                    !!(ponderado <= ((100 * dadosIndicador.peso) / 100)) &&
                    //console.log('verde')
                    '#00ff00' ||
                    //!!(ponderado > dadosIndicador.peso) &&
                    //console.log('azul')
                    '#00b0f0',
                  textSize: '30px',
                  textColor: '#000'
                })}
              />
            </Percent>
          </Dados>}
      </Content>
    </Container>
  )
}

