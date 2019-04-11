import React, { Component } from 'react';

// PACKAGES
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import NavContainer from './components/navigation/NavContainer';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
