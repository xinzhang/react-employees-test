import React from 'react';
import Header from './components/header/Header';
import Grid from './components/grid/Grid';
import './styles/Header.css';

function App() {
  return (
    <>
    <div className="header">
      <Header />      
    </div>
    <Grid />
    </>
  );
}

export default App;
