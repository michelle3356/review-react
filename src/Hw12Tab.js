import React, { Component } from 'react';

const tabContent = [
  'hahaha',
  'me is two',
  'three',
];

export default class Hw12Tab extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabIndex: 0
    }
  }

  handleClick = (index) => {
    this.setState({
      tabIndex: index
    })
  }

  render() {
    return (
      <div id ="tab">
        <ul>
          <li onClick={this.handleClick.bind(this, 0)}>tab1</li>
          <li onClick={this.handleClick.bind(this, 1)}>tab2</li>
          <li onClick={this.handleClick.bind(this, 2)}>tab3</li>
        </ul>
        <div><p>{tabContent[this.state.tabIndex]}</p></div>
      </div>
    )
  }
}
