import React from 'react';
import Player from './Player.js'
import Header from './Header.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 4};
    this.handlePlayerCountChange = this.handlePlayerCountChange.bind(this);
  }

  handlePlayerCountChange(n) {
    this.setState({count: n})
  }

  render() {
    return (
      <div className="App">
        <Header onPlayerCountChange={this.handlePlayerCountChange}/>
        {Array(this.state.count).fill().map((n,i) =>
          <Player name={"Player " + (parseInt(i)+1)}/>
        )}
      </div>
    );
  }
}

export default App;
