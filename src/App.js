import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing';
import Profile from './components/Profile';
import Pictures from './components/Pictures';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import DevPeek from './components/DevPeek';
import SidebarContext from './context/sidebarContext';
import UserContext from './context/userContext';

require('dotenv').config();

function App() {
  const [sidebarStyle, setSidebarStyle] = useState('landing');
  const [userData, setUserData] = useState({});
  
  return (
    <div className="App">
      <SidebarContext.Provider value={{ sidebarStyle, setSidebarStyle }}>
        <UserContext.Provider value={{ userData, setUserData }}>
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
        </UserContext.Provider>
      </SidebarContext.Provider>
    </div>
  );
}

export default App;
