import React, { useState, FormEvent } from 'react';

// import { Link } from 'react-router-dom';
import { Header, Login } from './styles';
import logoImg from '../../assets/Logo.svg';
// import api from '../../services/api';

// interface SessionUser {
//   token: string;
// }

const Session: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logoImg} alt="MyLink" />
      </Header>
      <Login>
        <span>FAÇA SEU LOGIN</span>

        <input placeholder="User" required />
        <input type="password" placeholder="Password" required />

        <div>
          <button type="submit">ENTRAR</button>
        </div>
      </Login>
    </>
  );
};

export default Session;
