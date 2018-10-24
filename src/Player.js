import React from 'react';
import Tracker from './Tracker';
import './Player.css';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.name + "  "};
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState(state => ({
			name: window.prompt("Enter player's name:", "Player") + "  ",
		}));
  }

  render() {
    let edit = '\u270E';
    return (
      <div className="Player">
        <div className="nameContainer">
          <h2 className="name">{this.state.name}</h2>
          <button onClick={this.changeName}>{edit}</button>
        </div>
        <h4>Primary Ingredients</h4>
        <Tracker name='Bread' color='brown'/>
        <Tracker name='Meat' color='red'/>
        <Tracker name='Cheese' color='yellow'/>
        <Tracker name='Fruit/Vegetable' color='green'/>
        <Tracker name='Salt' color='gray'/>

        <h4>Sub Ingredients</h4>
        <Tracker name='Live Animal' color='red'/>
        <Tracker name='Flour' color='beige'/>
        <Tracker name='Milk' color='lightgray'/>
      </div>
    );
  }
}

export default Player;
