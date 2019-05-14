import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Home from './components/HomePage';
import { Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
      </div>
    );
  }

  
}

export default App;
