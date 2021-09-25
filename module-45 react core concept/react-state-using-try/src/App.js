import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>

    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const incresae = () => setCount(count + 1);
  const decresae = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={incresae}>Increase</button>
      <button onClick={decresae}>Decrease</button>
    </div>
  );
}

export default App;
