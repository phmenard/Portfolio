import React from 'react';
import styled from 'styled-components';

import Content from './header-styles';
import Title from './title/Title';

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name, 
   }
       
    
  }   

  componentDidMount() {
    this.setState(state => ({
      //name: state.name = 'paul'
    }));
  }       

  componentWillUnmount() {

  }

  render() {
    return (
      <Content ><Title name={this.state.name} ></Title></Content>
    );
  }
}

export default Header;