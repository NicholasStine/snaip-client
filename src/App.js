import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing';
import Profile from './components/Profile';
import Pictures from './components/Pictures';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import DevPeek from './components/DevPeek';

require('dotenv').config();

function App() {
  
  return (
    <div className="App">
      <Router>
      <Sidebar />
      <div className="router">
        
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/pictures" component={Pictures} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/devpeek" component={DevPeek} />
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
