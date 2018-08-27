import React, { Component } from 'react';
import '../styles/App.css';

import AddTrail from './AddTrail';
// import firebase, { auth, provider } from '../firebase';
// import TrailTable from './TrailTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trail Tracker app</h1>
        </header>
        <AddTrail />
        {/* <TrailTable /> */}
      </div>
    );
  }
}

export default App;