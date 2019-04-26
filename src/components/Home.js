import React, { Component } from 'react';
import SplitText from 'react-pose-text';
import './HomeStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollableAnchor from 'react-scrollable-anchor'

class Home extends Component {
  render() {
    let imgUrl = 'https://images.unsplash.com/photo-1498502650009-b70418f18f08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80'; 

    const wordPoses = {
        draggable: true
      };

    const charPoses = {
        exit: { y: 20, opacity: 0 },
        enter: {
          y: 0,
          opacity: 1,
          transition: ({ charInWordIndex }) => ({
            type: 'spring',
            delay: charInWordIndex * 30,
            stiffness: 500 + charInWordIndex * 150,
            damping: 10 - charInWordIndex * 1
          })
        },
        drag: {
            y: 0,
            transition: ({ charInWordIndex }) => ({
              type: 'spring',
              velocity: 100 * Math.sin(1 + charInWordIndex),
              damping: 0
            })
          },
          dragEnd: {
            y: 0,
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 1000
            }
          }
      };
      
    return (
    <div className="all-content">
    <div className="Jumbotron Main"
        style = {{ backgroundImage: 'url(' + imgUrl + ')', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'non-repeat'
                }}>
        <div className="container text-center ">
        <p className="h1"><span></span>
            <span style={{ color: '#FF0057' }} className="myName"><SplitText initialPose="exit" pose="enter" wordPoses={wordPoses} charPoses={charPoses} >
                Hi! I am Junzhe "Jun" Piao,
            </SplitText></span>
        </p>
        <p className="h1"><span></span>
            <span style={{ color: '#FF0057' }} className="myName"><SplitText initialPose="exit" pose="enter" wordPoses={wordPoses} charPoses={charPoses} >
                A Full-Stack Web Developer!
            </SplitText></span>
        </p>
        <div>
        <a className="nav-link" href='#menu'><FontAwesomeIcon icon="arrow-circle-down" style={{color:"white"}} size="3x"/></a>
        </div>
        </div>
    </div>
    <div className="Menu-content">
      <ScrollableAnchor id={'menu'}>
            <div></div>
      </ScrollableAnchor>
    </div>
    </div>
    );
  }
}

export default Home;

