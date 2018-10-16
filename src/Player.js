import React from 'react';
import Tracker from './Tracker';
import './Player.css';

class Player extends React.Component {
  render() {
    return (
      <div className="Player">
        <h3 className="name">{this.props.name}</h3>
		<Tracker name='meat'/>
		<Tracker name='bread'/>
		<Tracker name='fruit'/>
      </div>
    );
  }
}

export default Player;
