import React, { Component } from 'react';
import './AboutStyle.css';
import { Icon } from 'semantic-ui-react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
    labels: ['JavaScript', 'ReactJS', 'Vue.js', 'Node.js', 'HTML5', 'CSS3', 'Git', 'Github', 'PostgreSQL','MySQL','MongoDB'],
    datasets: [
      {
        label: 'Level',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'rgba(255,99,132,0.6)',
        borderWidth: 0,
        hoverBackgroundColor: 'rgba(255,99,132,1)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [95, 85, 80, 75, 90, 90, 80,70,75,70,65]
      }
    ]
  };

class About extends Component {
  render() {
    return (
    <div className="about-page p-5">
    <div className="row">
        <div className="col-md-10 offset-md-1">
            <div className="container-fluid text-center">
                <h1 className='m-3 p-2'>ABOUT</h1>

                <div className="row m-3">
                    <div className="col-4">
                        <div className="profile">

                            <div className="picture">
                                <img src={require('./junzhepiao.png')} alt="Avatar" className="image" />

                                <div className="overlay">
                                    <div className="text">
                                        <p>
                                        "Work Smart And Work Hard!". A self-motivated Full Stack Developer continually accepts challenges and new technologies.  Pursue better coding efficiency, usability, and reliability are my missions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <h1 className="name">Jun Piao</h1>
                                <p className="title">Full-Stack Web Developer</p>
                                <p><Icon color="black" className='mail' size='large'/>: junzhepiao@gmail.com</p>
                                <p><Icon color="black" className='wechat' size='large'/>: piaojunzhe555</p>
                                <span><p>Galvanize Phoenix - 04/2019</p></span>
                                <span><p>ASU - 12/2018</p></span>
                                <div className="logos">
                                    <a href="https://www.linkedin.com/in/junzhe-piao-b91321154/"><Icon circular color="blue" className='linkedin' size='large'/></a>
                                    <a href="https://github.com/Junzhepiao"><Icon circular color="black" className='github' size='large'/></a>
                                    <a href="https://www.youtube.com/channel/UCqcV1s_Wo0XHUSpIdX29UDQ/featured?view_as=subscriber"><Icon circular color="red" className='youtube' size='large'/></a>
                                    <a href="/"><Icon circular color="teal" className='home' size='large'/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-8 chart">
                    <h2>Technologies</h2>
                    <HorizontalBar data={data} options={{legend: {display: false},scales: {xAxes: [{ ticks: {max: 100,min: 0,stepSize: 10}}]}}} />
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default About;

