import React, { Component } from 'react';
import './ProjectStyle.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledCarousel } from 'reactstrap';
import { Button, Icon} from 'semantic-ui-react';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    
    return (
      <div className="container-flux-project">
        <div className="project-picture">
          <img src={require(`${this.props.project.image}`)} alt="Avatar" className="project-image" />
            <div className="project-overlay">
              <div className="project-text">
                <h1>{this.props.project.name}</h1>
                <h4 className="text-danger"> {this.props.project.technologies}</h4>
                <Button inverted color="red" onClick={this.toggle}>Learn More</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>{this.props.project.name}</ModalHeader>
          <UncontrolledCarousel items={this.props.project.slides} />
          <ModalBody className="text-center">
            <h3>Description:</h3>
            <h3>{this.props.project.description}</h3><br />
            <h4>Features:</h4>
            <h4>{this.props.project.features}</h4><br />

          <a href={this.props.project.youtube}><Button size='mini' color='youtube' floated='center'><Icon name='youtube' /> YouTube</Button></a>
          <a href={this.props.project.github}><Button size='mini' color='black' floated='center'><Icon name='github' /> Github</Button></a>
          </ModalBody>
          <ModalFooter >
          <Button color='red' onClick={this.toggle} floated='right'>Close</Button>
          </ModalFooter>
        </Modal>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Project;

