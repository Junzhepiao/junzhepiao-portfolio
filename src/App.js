import React, { Component } from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab,faArrowCircleDown)

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
