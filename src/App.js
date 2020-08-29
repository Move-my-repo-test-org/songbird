import React from 'react';
import Header from './Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header currentQuestion={4} />
      </header>
      <p>Hello</p>
    </div>
  );
}

export default App;
