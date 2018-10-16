import React from 'react';
import Player from './Player.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">Easy As Pie™ - Ingredient Tracker</h1>
        <Player name='Player 1'/>
        <Player name='Player 2'/>
        <Player name='Player 3'/>
        <Player name='Player 4'/>
      </div>
    );
  }
}

export default App;
