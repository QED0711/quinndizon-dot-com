import React, { Component } from 'react';

// PACKAGES
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import NavContainer from './components/navigation/NavContainer';
import AboutContainer from './components/about/AboutContainer';
import EventsContainer from './components/events/EventsContainer';
import ListenContainer from './components/listen/ListenContainer';
import ProjectsContainer from './components/projects/ProjectsContainer';
import ResumeContainer from './components/resume/ResumeContainer';
import BlogContainer from './components/blog/BlogContainer';
import ContactContainer from './components/contact/ContactContainer';
// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavContainer />
        
          
          <Route path="/" exact component={AboutContainer} />
          <Route path="/events" exact component={EventsContainer} />
          <Route path="/listen" exact component={ListenContainer} />
          <Route path="/projects" exact component={ProjectsContainer} />
          <Route path="/resume" exact component={ResumeContainer} />
          <Route path="/contact" exact component={ContactContainer} />
          <Route path="/blog" exact component={BlogContainer} />
          


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
