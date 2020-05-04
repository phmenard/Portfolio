import React from 'react';
import styled from 'styled-components';

import Content, { H1 } from './main-content-styles';

import './main-container.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            depProjects: props.deployedProjects
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
            <Content ><H1>{this.state.depProjects.length}</H1><div>World !</div></Content>

        );
    }
}

export default Header;