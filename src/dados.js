import React from 'react';
import { FaStoreAlt } from 'react-icons/fa'
import { TbUsers } from 'react-icons/tb'


const dados = [
  {
    id: 1,
    descricao: 'Mercado e imagem',
    color: 'red',
    icon: '<FaStoreAlt/>',
    id_objetivo_estrategico: [{
      id: 1,
      descricao: 'Vendas do Varejo',
      id_indicador: [{
        id: 1,
        descricao: '% de atingimento do plano de vendas',
        id_dado: {
          id: 1,
          mes_ano: '12/2022',
          realizado1: 100,
          realizado2: 100,
          meta: 100,
          peso: 10,
          ponderacao: 10,
        }
      }]
    }]
  },
  {
    id: 2,
    descricao: 'Patrimônio humano',
    color: 'blue',
    icon: '<FaStoreAlt/>',
    id_objetivo_estrategico: [
      {
        id: 2,
        descricao: 'Dispor de Lideranças de Alta Performance',
        id_indicador: [{
          id: 2,
          descricao: '% de atingimento do CRS das lojas',
          id_dado: {
            id: 2,
            mes_ano: '12/2022',
            realizado1: 78,
            realizado2: 95,
            meta: 95,
            peso: 20,
            ponderacao: 20,
          }
        },
        {
          id: 3,
          descricao: '% de turnover',
          id_dado: {
            id: 3,
            mes_ano: '12/2022',
            realizado1: 60.5,
            realizado2: 4.5,
            meta: 4.5,
            peso: 30,
            ponderacao: 30,
          }
        }
        ]
      },
      {
        id: 3,
        descricao: 'Melhorar Clima Organizacional',
        id_indicador: [{
          id: 4,
          descricao: '% E-NPS (Lideranças)',
          id_dado: {
            id: 4,
            mes_ano: '12/2022',
            realizado1: 67.5,
            realizado2: 75,
            meta: 75,
            peso: 10,
            ponderacao: 10,
          }
        }]
      }
    ]
  },
  {
    id: 3,
    descricao: 'Processos de gente e gestão',
    color: 'green',
    icon: 'FaStoreAlt',
    id_objetivo_estrategico: [{
      id: 4,
      descricao: 'Retenção',
      id_indicador: [{
        id: 5,
        descricao: '% de efetivação no período de experiência',
        id_dado: {
          id: 5,
          mes_ano: '12/2022',
          realizado1: 0,
          realizado2: 80,
          meta: 80,
          peso: 20,
          ponderacao: 20,
        }
      }]
    },
    {
      id: 5,
      descricao: 'Custos com Pessoas',
      id_indicador: [{
        id: 6,
        descricao: '% de despesas com pessoas',
        id_dado: {
          id: 6,
          mes_ano: '12/2022',
          realizado1: 12,
          realizado2: 10.4,
          meta: 10.4,
          peso: 10,
          ponderacao: 10,
        }
      }]
    }
    ]
  },

];

export default dados;
