import React, { Component } from 'react';

class CounterList extends React.Component{
  constructor(){
    super();
    this.state = {
      counterList: [],
      counterNum: 0
    }
  };

  handleClick = (e) =>{
    let list = this.state.counterList;
    list.push(this.state.counterNum);
    this.setState({
      counterNum: this.state.counterNum + 1,
      counterList: list
    })
  }

  render(){
    return(
      <div>
        <h1>2.計數器列表Counter List</h1>
        <button
        onClick={this.handleClick.bind(this)}>點此產生列表</button>
        <ul>
          {this.state.counterList.map(item=>
          <li key={item.index}>{item}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default CounterList;