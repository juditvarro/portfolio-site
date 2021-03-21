import './App.css';
import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import ContactContainer from './components/ContactContainer/ContactContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <ProjectContainer />
        <ContactContainer />
      </div>
    );
  }
}

export default App;
