//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import MainContent from './components/main_content/MainContainer';

import Me from './my_objects/me';

function App() {
  return (
    <div className="App">
      <header >
        <Header name={Me.name} depProjects={Me.deployedProjects}/>
        <MainContent />
         
      </header>
    </div>
  );
}

export default App;
