import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {OrderApi} from "./codegen";

const orderApi = new OrderApi({basePath: 'http://localhost/agwergr'});

orderApi.getOrderId('abc');

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
