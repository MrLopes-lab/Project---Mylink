import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f5;
  font-weight: bold;
  max-width: 480px;

  margin-top: 80px;
`;

export const CreateLinkButton = styled.div`
  margin-top: 70px;
  max-width: 920px;
  display: block;
  text-decoration: none;
  display: flex;

  button {
    flex: 1;
    height: 70px;
    background: #7159c1;
    border: 0;
    border-radius: 15px;
    color: #f0f0f5;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#7159c1')};
    }
  }
`;
