import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #202024;
  padding: 30px 0;

  header {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};

    img {
      width: 200px;
    }

    nav {
      a {
        color: #f0f0f5;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.6;
        }

        & + a {
          margin-left: 32px;
        }
      }
    }
  }
`;
