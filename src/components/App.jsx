import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Counter />
    </div>
  );
};
