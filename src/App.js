//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import MainContent from './components/main_content/MainContainer';

import Me, {setDeployedProject} from './my_objects/me';

const projectOne  = {
  name: 'Hi',
  gitHub: 'yep',
  liveLink: 'ok'
}

const projectTwo  = {
  name: 'It all right ',
  gitHub: 'sure',
  liveLink: 'love it react is cool'
}


function App() {
  setDeployedProject(projectOne);
  setDeployedProject(projectTwo);
  return (
    <div className="App">
      <header >
        {console.log(Me)}
        <Header name={Me.name} />
        <MainContent deployedProjects={Me.deployedProjects} avitar={Me.avitar}/>
         
      </header>
    </div>
  );
}

export default App;
