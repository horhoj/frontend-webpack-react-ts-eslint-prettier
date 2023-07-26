import { FC } from 'react';
import { TestComponent } from './TestComponent';
import x from './assets/img/1.jpg';
import { useAppSelector } from './store/hooks';

export const App: FC = () => {
  const xy = useAppSelector((state) => state.app.redirectUrl);

  return (
    <div>
      <div>cool29horhoj default webpack config </div> <TestComponent />
      111==
      {JSON.stringify(xy)}
      <img src={x} alt="" />
    </div>
  );
};
