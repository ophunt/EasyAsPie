import React from 'react';
import './Tracker.css';

class Tracker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {amount: 0}
		this.subtract = this.subtract.bind(this);
		this.add = this.add.bind(this);
	}

	subtract() {
		this.setState(state => ({
			amount: Math.max(0, state.amount-1)
		}));
	}

	add() {
		this.setState(state => ({
			amount: state.amount+1
		}));
	}

	render() {
		return (
			<div className="Tracker">
				<button onClick={this.subtract} className="minus">-</button>
				<h5 className="ingredient">{this.props.name}: {this.state.amount}</h5>
				<button onClick={this.add} className="plus">+</button>
			</div>
		);
	}
}

export default Tracker;
