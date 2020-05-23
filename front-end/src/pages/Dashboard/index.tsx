import React from 'react';

import { Title, CreateLinkButton } from './styles';

// import api from '../../services/api';

// interface Links {}

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Crie seus links</Title>

      <CreateLinkButton>
        <button type="button">NOVO BOTÃO / LINK </button>
      </CreateLinkButton>
    </>
  );
};

export default Dashboard;
