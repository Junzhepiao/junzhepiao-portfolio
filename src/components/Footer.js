import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './FooterStyle.css';


class Footer extends Component {
  render() {
    return (
<div className="ui inverted gray vertical footer segment p-4">
    <div className="ui center aligned container">
        <a className="pr-2 pl-2" href="https://www.linkedin.com/in/junzhe-piao-b91321154/"><Icon className='linkedin' size='large'/></a>| 
        <a className="pr-2 pl-2" href="https://github.com/Junzhepiao"><Icon className='github' size='large'/></a>| 
        <a className="pr-2 pl-2" href="https://www.youtube.com/channel/UCqcV1s_Wo0XHUSpIdX29UDQ/featured?view_as=subscriber"><Icon className='youtube' size='large'/></a>| 
        <a className="pr-2 pl-2" href="/"><Icon className='home' size='large'/></a>
        <h5 className="ui inverted header">&copy; Copyright 2019 | Junzhe "Jun" Piao </h5>
    </div>
</div>
    );
  }
}

export default Footer;

