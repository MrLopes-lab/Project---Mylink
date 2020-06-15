import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #7951c1;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 16px;
  color: #202024;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#7951c1')};
  }
`;
