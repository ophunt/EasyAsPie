import React from 'react';
import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.count = 4;
		this.addPlayer = this.addPlayer.bind(this);
		this.removePlayer = this.removePlayer.bind(this);
	}

	addPlayer() {
		this.count = Math.min(this.count + 1, 8);
		this.props.onPlayerCountChange(this.count);
	}

	removePlayer() {
		this.count = Math.max(1, this.count - 1);
		this.props.onPlayerCountChange(this.count);
	}

	render() {
	  return (
		<div className="Header">
			<div className="playerController">
				<button className="removePlayer" onClick={this.removePlayer}>Remove<br/>Player</button>
				<button className="addPlayer" onClick={this.addPlayer}>Add<br/>Player</button>
			</div>
		  <h1 id="title">Easy As Pie™ - Ingredient Tracker</h1>
		</div>
	  );
	}
  }

  export default Header;
