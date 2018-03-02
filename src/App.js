import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: -1,
    };
  }

  renderButton(i, name) {
    if(this.state.index === i) {
      return (
        <button className="selected" onClick={() => this.onClick(i)}>{name}</button>
      );
    } else {
      return (
        <button className="not_selected" onClick={() => this.onClick(i)}>{name}</button>
      );
    }
  }

  onClick(i) {
    this.setState({
      index: i,
    });
  }

  render() {
    return (
      <div className="root_div">
        {this.renderButton(0, 'Home')}
        {this.renderButton(1, 'About')}
        {this.renderButton(2, 'Contact')}
      </div>
    );
  }
}

export default App;
