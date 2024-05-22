import React from 'react';
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Partition from './components/Partition';
import AlphabetGrid from './components/AlphabetGrid';
import Header from './components/Header';

function App() {
  

  return (
    <>
      
        <div >
          <BrowserRouter>
          <Header></Header>
            <Routes>
              <Route path="/" element={ <Partition></Partition> } />
              <Route path="/alphabet" element={ <AlphabetGrid></AlphabetGrid> } />
            </Routes>
          </BrowserRouter>
        </div>
      
      
    </>
  )
}

export default App;
