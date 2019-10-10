import React from 'react';
import './App.css';

import logo from './assets/logo.jpg'

import Routes from './routes';

function App() {
  return (
    <div className="container">

      <div className="content">

        <div className="title">
          <label>Cifra de Cézar</label>
        </div>
        <div className="contentBox">

          <img className='logo' src={logo} alt="Cifra de Cezar" />

          <Routes />

        </div>

        <div className="result">
          <div className="resultTitle">
            <label>RESPOSTA</label>
          </div>
          <p>
            <label>Cifrada:</label>
          </p>

          <br />

          <p>
            <label>Decifrada:</label>
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
