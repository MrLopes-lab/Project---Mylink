import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  padding: 10px 20px;
  margin-bottom: 150px;
  background: #202024;

  img {
    width: 150px;
  }
`;

// ===============================================================
export const Login = styled.form`
  max-width: 450px;
  margin: 0 auto;
  padding: 20px 50px;
  background: #202024;
  border: 2px solid #7159c1;
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;

  span {
    font-size: 34px;
    color: #f0f0f5;

    display: inherit;
    text-align: center;
    padding-bottom: 54px;
  }

  input {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    padding: 0 20px;
    border-radius: 25px;
    background: #f0f0f5;
    color: #7159c1;
    border: 3px solid #f0f0f5;

    /* &:focus {
      border-color: #7159c1;
    } */

    &::placeholder {
      color: #0b0a0d;
    }
  }

  button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 25px;
    border: 1px solid #7159c1;
    background: #7159c1;
    color: #0b0a0d;
    font-weight: bold;
    transition: background-color 0.5s;

    &:hover {
      background: ${shade(0.2, '#7159c1')};
      color: #f0f0f5;
      border: 2px solid #f0f0f5;
    }
  }
`;
