import React from 'react';
import './App.css';
import Navbar from './components/views/Navbar';
import { Switch , Route, Redirect } from 'react-router-dom'
import Profile from './components/views/Profile';
import Login from './components/views/Login';
import Register from './components/views/Register';
import Home from './components/views/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </div>
  );
}

export default App;
