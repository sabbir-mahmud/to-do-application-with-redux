import React from 'react';
import './App.css';
import Home from './components/Home';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Home />
    </div>
  );
}

export default App;
