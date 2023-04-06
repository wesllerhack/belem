import styled from "styled-components";

import Select from 'react-select'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 40px;
`;

export const Selector = styled(Select)`
  height: 40px;
  width: 100%;
  background: transparent;
`;
