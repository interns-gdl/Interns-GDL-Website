import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar.js';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
        <header>
          <Navbar />
        </header>
        <main>Content</main>
        <footer>Links and other stuff</footer>
        </Router>
      </div>
    );
  }
}

export default App;
