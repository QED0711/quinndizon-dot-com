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
import BlogPostContainer from './components/blog/BlogPostContainer';

// CSS
import './css/variables.css';
import './App.css';
import './css/content-card.css';
import './css/content-selector.css';
import './css/project-icon-container.css';
import './css/project-icons.css';
import './css/content-container.css';
import './css/events.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavContainer />
        
          
          <Route path="/" exact component={AboutContainer} />
          <Route path="/events" component={EventsContainer} />
          
          <Route path="/listen" exact component={ListenContainer} />
          <Route path="/listen/:work" component={ListenContainer} />


          <Route path="/projects" exact component={ProjectsContainer} />
          <Route path="/projects/:project" component={ProjectsContainer} />
          
          <Route path="/resume" component={ResumeContainer} />
          <Route path="/contact" component={ContactContainer} />
          
          <Route path="/blog" exact component={BlogContainer} />
          <Route path="/blog/:post" exact component={BlogPostContainer} />
          


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
