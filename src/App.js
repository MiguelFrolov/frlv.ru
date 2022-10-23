import React from 'react';
import './App.css';
import Grid from './components/Grid';
import { content } from "./data/Content"

function App() {
  return (
    <div className="container">
      <Grid contentArr={content} />
    </div>
  );
}

export default App;
