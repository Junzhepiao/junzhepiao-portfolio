import React, { Component } from 'react';
import './PortfolioStyle.css';
import Project from './Project';

class Portfolio extends Component {
        state = {
            name: "jun",
            projects: [{
                id:1,
                name: 'WorkSpace',
                description: 'Web application for improve internal team communication',
                date: 'April 2019',
                technologies: 'JavaScript, Vue.js, Vuex, Vuetify, Express, Knex, MySQL ',
                image:'./workspaceboard.png',
                slides: [ {src:require('./workspaceboard.png')},{src:require('./workspacetask.png')},{src:require('./workspaceevent.png')},{src:require('./workspacechat.png')}],
                description: "WorkSpace is a web application for improving internal team communication.",
                features:"Register/login, Edit profile, Taks list, Post events, Group chat.",
                youtube:"https://www.youtube.com/watch?v=BFgaM9kggp4",
                github:"https://github.com/Junzhepiao/WorkSpace"
            },
            {
                id:2,
                name: 'AZ TOUR',
                description: 'Web application for tourists, share information, choose places and contact a guider',
                date: 'March 2019',
                technologies: 'JavaScript, ReactJS, Redux, Bootstrap, Express, Knex, PostgreSQL',
                image:'./azmain.png',
                slides: [ {src:require('./azmain.png')},{src:require('./azpost.png')},{src:require('./azcomment.png')}],
                description: "AZ TOUR is a web application that suggests tourists places to visit in AZ, share information and stories, and also able to contact a local tour guide.",
                features:"Search, Sort, Shopping cart, Post/Delete story, Leave comments, vote up/down, register/login. ",
                youtube:"https://www.youtube.com/watch?v=X2CS8nUjN6E",
                github:"https://github.com/Junzhepiao/az_tour"
            },
            {
                id:3,
                name: 'Shopright',
                description: 'Web plattform for users buy and sell each others item from online',
                date: 'January 2019',
                technologies: 'MVC, HTML/CSS, EJS, Bootstrap, Express, PostgreSQL',
                image:'./shoprightmain.png',
                slides: [ {src:require('./shoprightmain.png')},{src:require('./shoprightpost.png')},{src:require('./shoprightcomment.png')}],
                description: "Shopright is a web platform allows users to sell their own items and buy items from other users.",
                features:"Register/login, Post item, Edit item, Leave comments, Wish list, Shopping cart.",
                youtube:"https://www.youtube.com/watch?v=O-vuGvUPpzY",
                github:"https://github.com/Junzhepiao/Project"
            },
            {
                id:4,
                name: 'Doctor Appointment',
                description: 'Web application for patients schedule appointments with doctor, allow doctors manage appointments',
                date: 'January 2019',
                technologies: 'MVC, HTML/CSS, EJS, Bootstrap, Express, PostgreSQL',
                image:'./doctormainpage.png',
                slides: [ {src:require('./doctormainpage.png')},{src:require('./doctorappointment.png')},{src:require('./doctorscomment.png')}],
                description: "This is a web application for patients to directly schedule an appointment with a doctor. And allows doctors to manage their appointments.",
                features:"Register/Login, Schedule appointments, Edit appointments, Leave notes.",
                youtube:"https://www.youtube.com/watch?v=wIlmIdSAW1U",
                github:"https://github.com/Junzhepiao/Q2-Assessment-Doctor-App"
            },
            {
                id:5,
                name: 'Camera Store',
                description: 'Web application for patients schedule appointments with doctor, allow doctors manage appointments',
                date: 'January 2019',
                technologies: 'JavaScript, ReactJS, Redux, Bootstrap',
                image:'./cameramain.png',
                slides: [ {src:require('./cameramain.png')},{src:require('./cameracart.png')},{src:require('./cameraform.png')}],
                description: "This is a simple web application that searches for the camera by name or rate and adds cameras to the shopping cart.",
                features:"Search, Sort, Shopping cart, Price calculate.",
                youtube:"https://www.youtube.com/watch?v=X94TS8dJZR4",
                github:"https://github.com/Junzhepiao/g108-q3-assessment"
            }
            ]
        }

  render() {
    return (
    <div className="portfolio-page p-5">
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="container-fluid text-center">
                    <h1 className='m-3 p-2'>Projects</h1>

                    <div className="row m-3">
                        <div className="container-flex">
                        {this.state.projects.map((project)=>{
                            return <Project key={project.id} project={project}/>
                        })}
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Portfolio;

