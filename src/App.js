import React, { Component } from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home/>
      <Menu/>
      <Footer/>
      </div>
    );
  }
}

export default App;
