import React from 'react';
import './App.css';
import Navbar from './components/views/Navbar';
import { Switch , Route } from 'react-router-dom'
import Profile from './components/views/Profile';
import Login from './components/views/Login';
import Register from './components/views/Register';
import Home from './components/views/Home';
import Customers from './components/views/Customers';
import Issues from './components/views/Issues';
import CustomerForm from './components/views/forms/CustomerForm';
import CurrentCustomer from './components/views/CurrentCustomer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customers" component={ Customers } />
        <Route exact path="/issues" component={ Issues } />
        <Route exact path="/customerform" component={ CustomerForm } />
        <Route exact path="/currentcustomer" component={ CurrentCustomer } />
      </Switch>
    </div>
  );
}

export default App;
