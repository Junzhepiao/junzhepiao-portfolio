import React, { Component } from 'react';
import './MenuStyle.css';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ScrollableAnchor from 'react-scrollable-anchor'
class Menu extends Component {
  render() {
    return (
        <div className="content-page">
        <nav className="navbar-expand-lg navbar-dark bg-dark navbar-fixed-top sticky-top">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active mr-2">
                                <a className="nav-link" href='/' activeclassname="activeRoute">Home</a>
                            </li>
                            <li className="nav-item mr-2">
                                <a className="nav-link" href='#about' activeclassname="activeRoute">About</a>
                            </li>
                            <li className="nav-item mr-2">
                                <a className="nav-link" href='#portfolio' activeclassname="activeRoute">Projects</a>
                            </li>
                            <li className="nav-item mr-2">
                                <a className="nav-link" href='#contact' activeclassname="activeRoute">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <ScrollableAnchor id={'about'}>
          <div> <About/> </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'portfolio'}>
          <div> <Portfolio/> </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <div> <Contact/> </div>
        </ScrollableAnchor>        
        </div>
    );
  }
}

export default Menu;

