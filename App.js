// src/App.js
import React from 'react';
import './App.css';
import Headlines from './components/Headlines';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>News Website</h1>
      </header>
      <main>
        <Headlines />
      </main>
    </div>
  );
}

export default App;
