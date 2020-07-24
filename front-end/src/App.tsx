import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Routes from './router';

import SingIn from './pages/SingIn';
import Dashboard from './pages/Dashboard';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />

    {/* <SingIn /> */}
    <Dashboard />
  </BrowserRouter>
);

export default App;
