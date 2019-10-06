/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>Hey Now</button>
      </header>
    </div>
  );
}

export default App;
