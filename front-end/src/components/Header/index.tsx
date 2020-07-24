import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/Logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'small' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="MyLink" />
      <nav>
        <Link to="/">Configurações</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
