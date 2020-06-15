import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './router';

import SingIn from './pages/SingIn';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <SingIn />
  </>
);

export default App;
