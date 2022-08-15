import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <section className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </section>

  );
}

export default App;
