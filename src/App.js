import P from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react'; // useEffect faz o trabalho de componentDidMount, componentDidUpdate e componentDidWillUnmount
import './App.css';

const Button = ({ incrementButton }) => {
  // React.memo - salva o componente na memória
  console.log('Filho Renderizou!');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    // A função fica memoizada em cache
    setCounter((c) => c + num);
  }, []); // Faz com que a função fique salva na memória e não seja recriada toda vez que o componente pai (App) é renderizado

  console.log('Pai Renderizou!');

  const btn = useMemo(() => <Button incrementButton={incrementCounter} />, [incrementCounter]);
  // Tudo que for usado e for externo deve estar no array de dependências

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      {btn}
      {/* O componente não é re-renderizado desnecessariamente */}
    </div>
  );
}

export default App;
