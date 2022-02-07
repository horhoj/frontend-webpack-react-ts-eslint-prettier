import { FC } from 'react';
import { TestComponent } from './TestComponent';
import x from './assets/img/1.jpg';

export const App: FC = () => {
  return (
    <div>
      <div>cool29horhoj default webpack config </div>
      <TestComponent />
      111
      <img src={x} alt="" />
    </div>
  );
};
