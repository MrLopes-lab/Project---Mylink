import React, { useRef, useState, FormEvent } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

// import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/Logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Session: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = {};

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="MyLink" />

        <Form ref={formRef} onSubmit={() => {}}>
          <h1>Faça seu Login</h1>

          <Input placeholder="E-mail" name="email" icon={FiMail} />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            icon={FiLock}
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Session;
