import { createGlobalStyle } from 'styled-components';

import BgImg from '../assets/bg.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${BgImg}) top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    /* max-width: 960px; */
    /* margin: 0 auto;
    padding: 0 20px; */
  }

  button {
    cursor: pointer;
  }
`;
