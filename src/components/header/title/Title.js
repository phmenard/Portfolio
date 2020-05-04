import React from 'react';
import styled from 'styled-components';

//import Content from './header-content';

import './title.css';

class Title extends React.Component {
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
            <div>
                {this.state.name}
            </div>

        );
    }
}

export default Title;