import './App.css';
import React from 'react';
import Navbar from './navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Sierra College CS CLub</h1>
        <p>We are so epic</p>
      </div>
    </div>
  );
}

export default App;