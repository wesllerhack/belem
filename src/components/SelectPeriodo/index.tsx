import React, { useState } from 'react'

import { Container, DateSelector } from './styles';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';

const SelectPeriodo = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
      <DateSelector
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        locale={ptBR}
        dateFormat="MMMM 'de' yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showTwoColumnMonthYearPicker
      />
    </Container>
  )
}

export default SelectPeriodo
