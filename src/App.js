import { useState, useEffect } from 'react'; // useEffect faz o trabalho de componentDidMount, componentDidUpdate e componentDidWillUnmount
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // // componentDidUpdate - executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // // componentDidMount - executa 1x
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);

  // // Com dependência - executa toda vez que a dependência mudar
  // useEffect(() => {
  //   console.log('Contador mudou para', counter); // Se for utilizado qualquer elemento do estado, é uma dependência, então deve ser passada para o Array de dependências
  // }, [counter]);

  // // Com dependência - executa toda vez que a dependência mudar
  // useEffect(() => {
  //   console.log('Contador2 mudou para', counter2); // Se for utilizado qualquer elemento do estado, é uma dependência, então deve ser passada para o Array de dependências
  // }, [counter2]);

  // // Com dependência - executa toda vez que a dependência mudar
  // useEffect(() => {
  //   console.log(`Counter 1 ${counter} - Counter 2 ${counter2}`); // Se for utilizado qualquer elemento do estado, é uma dependência, então deve ser passada para o Array de dependências
  // }, [counter, counter2]); // toda a variável utilizada dentro do useEffect deve ser passado como uma dependência

  const eventFn = () => {
    console.log('oi');
  };

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillMount - Limpeza
    return () => {
      document.querySelector('h1').removeEventListener('click', eventFn);
    };
  });

  return (
    <div className="App">
      <h1>C1: {counter}</h1>
      <h1>C2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <br />
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default App;
