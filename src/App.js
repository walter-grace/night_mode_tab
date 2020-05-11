import React from 'react';
import logo from './logo.svg';
import './App.css';
import DarkModeToggle from './DarkModeToggle';
import DraggableList from './components/MenuPage';

function App() {
  return (
    <div className="App">
      <div>
        <DarkModeToggle />
      <DraggableList
      items={'Bitcoin Ethereum Tether Cardano'.split(' ')}
      />
      </div>
    </div>
  );
}

export default App;
