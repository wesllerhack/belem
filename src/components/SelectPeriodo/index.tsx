import { Container, DateSelector } from './styles';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import { useInContext } from '../../context/DataContext';

export const SelectPeriodo = () => {
  const { selectedDate, setSelectedDate } = useInContext()



  return (
    <Container>
      <DateSelector
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        locale={ptBR}
        dateFormat="MMMM 'de' yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showTwoColumnMonthYearPicker
      />
    </Container>
  )
}
