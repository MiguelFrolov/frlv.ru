import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Grid from './components/Grid';
import { contentRu } from "./data/Content"
import { contentEn } from "./data/en/Content"

function App() {
  return (

    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<><a className='lang' href="#/ru">Ру</a><Grid contentArr={contentEn} /></>} />
          <Route path="/ru" element={<><a className='lang' href="/">En</a><Grid contentArr={contentRu} /></>} />
          <Route path="*" element={<><a className='lang' href="/">home page</a><h1>route not found</h1></>} status={404} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
