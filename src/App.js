import React from 'react';
import './App.css';
import ButtonFelipe from './components/inputs/ButtonFelipe'

function App() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Material design on ReactJS - Inputs</h1>
      
      <ButtonFelipe label="Boton #1" color="primary" />{' '}
      <ButtonFelipe label="Boton #1" color="secondary" />{' '}    
      <ButtonFelipe label="Boton #1" color="primary" variant="contained"/>{' '}
      <ButtonFelipe label="Boton #1" color="secondary" variant="contained"/>{' '}
      <ButtonFelipe label="Boton #1" color="primary" variant="outlined"/>{' '}
      <ButtonFelipe label="Boton #1" color="secondary" variant="outlined"/>{' '}          
    </div>
  );
}

export default App;
