import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar.js';
import Footer from './Footer.js';
import NotFound from './NotFound.js';

class App extends React.Component {
  render(){
    return (
      <div className="bg-light">
        <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
          <Route exact path="/" render={()=>(
            <h1>Welcome</h1>
          )} />
          <Route exact path="/apply" render={()=>(
            <h1>Apply</h1>
          )} />
          <Route exact path="/workshops" render={()=>(
            <h1>Workshops</h1>
          )} />
          <Route exact path="/events" render={()=>(
            <h1>Events</h1>
          )} />
          <Route exact path="/resources" render={()=>(
            <h1>Resources</h1>
          )} />
          <Route exact path="/fun" render={()=>(
            <h1>Fun</h1>
          )} />
          <Route exact path="/about" render={()=>(
            <h1>About us</h1>
          )} />
          <Route component={NotFound}></Route>
        </Switch>
          
        </main>

        <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
