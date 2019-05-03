import React, { Component } from 'react';
import './ContactStyle.css';
import { Icon, Button, Divider, Transition, Label } from 'semantic-ui-react';


class Contact extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
    <div className="contact-page p-5">
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="container-fluid text-center">
                    <h1 className='m-3 p-2'>Contact</h1>
                </div>
                <div className="contact-text text-center p-4">
                <img src={require('./junzhepiao.png')} alt="Avatar" className="rounded-circle " />

                    <h4>
                        Thank you for visiting!
                    </h4>
                    <h4>
                        Feel free to contact me for any questions or project collaboration opportunities. 
                    </h4>
                </div>
                <div className="resume-button text-center p-4">
                <a href="https://drive.google.com/open?id=1Cw31Q3SfdH_CrNLRG54d2R_HwjrZzOdO"><Button color='blue'><Icon name='google' /> Resume</Button></a>
                </div>
                <div className="gmail-button text-center p-2">
                <Button children={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility} color='red'><Icon name='google' /> Email</Button>
                <Divider hidden />
        <Transition visible={visible} animation='scale' duration={500}>
          <Label>Junzhepiao@gmail.com</Label>
        </Transition>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Contact;

