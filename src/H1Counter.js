import React from 'react';


class H1Counter extends React.Component{
  constructor(){
    super();
    this.state = {
      counterNum: 0
    }
  };

  handleClick = (counterNum) => {
    this.setState({
      counterNum: this.state.counterNum + 1
    })
  }


  render(){
    var counterNum = this.state.counterNum;
    return(
      <div>
        <h1>1.計數器</h1>
        <button
        onClick={this.handleClick.bind(this)}>click,than num = {counterNum}</button>
      </div>
    );
  }
}

export default H1Counter;