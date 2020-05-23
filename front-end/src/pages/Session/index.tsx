import React, { useState, FormEvent } from 'react';

import { Form } from './styles';
import api from '../../services/api';

interface SessionUser {
  token: string;
}

const Session: React.FC = () => {
  const [newSession, setNewSession] = useState('');
  const [session, setSession] = useState<SessionUser>();

  async function handleCreateSession(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    const response = await api.post;
  }

  return (
    <>
      <Form>
        <input placeholder="User" />
        <input type="password" placeholder="Password" />

        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default Session;
