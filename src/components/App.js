import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trail Tracker app</h1>
        </header>

      </div>
    );
  }
}

export default App;