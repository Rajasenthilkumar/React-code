// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const App = () => {
  return (
    <Router>
      <Navigation />
   
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    
    </Router>
  );
};

export default App;
