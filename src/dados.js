

export const dados = [
  {
    id: 1,
    descricao: 'Mercado e imagem',
    color: 'red',
    icon: '<FaStoreAlt/>',
    crsobjetivoestrategico: [{
      id: 1,
      descricao: 'Vendas do Varejo',
      crsindicador: [{
        id: 1,
        descricao: '% de atingimento do plano de vendas',
        crs_dados: {
          id: 1,
          mes_ano: '12/2022',
          realizado: 100,
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
    crsobjetivoestrategico: [
      {
        id: 2,
        descricao: 'Dispor de Lideranças de Alta Performance',
        crsindicador: [{
          id: 2,
          descricao: '% de atingimento do CRS das lojas',
          crs_dados: {
            id: 2,
            mes_ano: '12/2022',
            realizado: 78,
            realizado2: 95,
            meta: 95,
            peso: 20,
            ponderacao: 20,
          }
        },
        {
          id: 3,
          descricao: '% de turnover',
          crs_dados: {
            id: 3,
            mes_ano: '12/2022',
            realizado: 60.5,
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
        crsindicador: [{
          id: 4,
          descricao: '% E-NPS (Lideranças)',
          crs_dados: {
            id: 4,
            mes_ano: '12/2022',
            realizado: 67.5,
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
    crsobjetivoestrategico: [{
      id: 4,
      descricao: 'Retenção',
      crsindicador: [{
        id: 5,
        descricao: '% de efetivação no período de experiência',
        crs_dados: {
          id: 5,
          mes_ano: '12/2022',
          realizado: 0,
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
      crsindicador: [{}]
    }
    ]
  },

];

/*
export const dad = [
  {
    crs_dados: 1,
    mes_ano: '12/2022',
    realizado: 100,
    realizado2: 100,
    meta: 100,
    peso: 10,
    ponderacao: 10,
    indicadores: [{
      crsindicador: 1,
      descricao: '% de atingimento do plano de vendas',
      objetivos_estrategicos: [{
        crsobjetivoestrategico: 1,
        descricao: 'Vendas do Varejo',
      }]
    }],
  },
  {
    id_dado: 2,
    mes_ano: '12/2022',
    realizado1: 100,
    realizado2: 100,
    meta: 100,
    peso: 10,
    ponderacao: 10,
    indicadores: [{
      id_indicador: 2,
      descricao: '% de atingimento do plano de vendas',
      objetivos_estrategicos: [{
        id_objetivo_estrategico: 2,
        descricao: 'Vendas do Varejo',

      }]
    }],
  }
]

*/
