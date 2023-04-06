import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Container } from './styles'

export const VendaMeta = () => {

  return (
    <Container>
      <div style={{ width: '30vw', height: '30vw' }}>
        <h2>Percentual realizado da Meta de vendas do mês</h2>
        <CircularProgressbar
          value={55.51}
          text={`55,51%`}
          styles={buildStyles({
            pathColor: 'red',
            textSize: '1.50rem',
            textColor: '#000'
          })}
        />
      </div>
      <div style={{ width: '30vw', height: '30vw' }}>
        <h2>Percentual realizado da meta</h2>
        <CircularProgressbar
          value={50}
          text={`55,51%`}
          styles={buildStyles({

            pathColor: 'red',
            textSize: '1.50rem',
            textColor: '#000'
          })}
        />
      </div>
    </Container>
  )
}
