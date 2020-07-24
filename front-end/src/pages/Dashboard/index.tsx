import React from 'react';

import Header from '../../components/Header';
import { Container, Title, CreateLinkButton } from './styles';

// import api from '../../services/api';

// interface Links {}

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Crie seus links</Title>

      <CreateLinkButton>
        <button type="button">NOVO BOTÃO / LINK </button>
      </CreateLinkButton>
    </Container>
  );
};

export default Dashboard;
