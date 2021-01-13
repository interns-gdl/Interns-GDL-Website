import './App.css';
import Navbar from './Navbar.js';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>Content</main>
        <footer>Links and other stuff</footer>
      </div>
    );
  }
}

export default App;
