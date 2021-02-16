import React from 'react';
import './App.css';
import {SuiButton, SuiHeadline1} from "sapient-ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SuiHeadline1>Test title</SuiHeadline1>
        <SuiButton>Découvrir le programme</SuiButton>
      </header>
    </div>
  );
}

export default App;
