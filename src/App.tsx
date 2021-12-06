import { FC } from 'react';
import styled from 'styled-components';
import { TestComponent } from './TestComponent';

export const App: FC = () => {
  return (
    <Wrap>
      <Title>cool29horhoj default webpack config </Title>
      <TestComponent />
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #fff;
  margin: 0 auto;
  max-width: 1024px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  margin-top: 100px;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;
