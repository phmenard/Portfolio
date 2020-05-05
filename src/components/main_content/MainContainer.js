import React from 'react';
import styled from 'styled-components';

import Content, { H1 } from './main-content-styles';

import './main-container.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            deployedProjects: props.deployedProjects,
            avitar: props.avitar
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
            <div className='mainContainer'>
            <Content ><img className="img" src={this.state.avitar} alt="hacker"></img><H1>{this.state.deployedProjects.length}</H1><div>Hello World !</div></Content>
            </div>
        );
    }
}

export default Header;