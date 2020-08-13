import React from 'react';
import { Circle } from 'react-shapes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Circle r={150} fill={{ color: 'rgba(0,0,0,0.5)' }} stroke={{ color: '#AA00FF' }} strokeWidth={5} />
      </header>
    </div>
  );
}

export default App;
