import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Grid from './components/Grid';
import { contentRu } from "./data/Content"
import { contentEn } from "./data/en/Content"

function App() {
  return (

    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><a className='lang' href="/ru">русский</a><Grid contentArr={contentEn} /></>} />
          <Route path="/ru" element={<><a className='lang' href="/">English</a><Grid contentArr={contentRu} /></>} />
          <Route path="*" element={<><a className='lang' href="/">home page</a><h1>route not found</h1></>} status={404} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
