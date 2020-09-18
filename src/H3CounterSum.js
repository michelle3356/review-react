import React from 'react';

class H3CounterSum extends React.Component{
  constructor(){
    super();
    this.state = {
      counterNum: 0,
      counterSum: 0      
    }
  }

  handleClick = (e) => {
    this.setState({
      counterNum: this.state.counterNum + 1,
      counterSum: this.state.counterNum + this.state.counterSum
    })
  }

  render(){
    return(
      <div>
        <h1>3.點擊加總1+2+...+n</h1>
        <button onClick={this.handleClick.bind(this)}>click it,sum of add</button>
        <div>累加數：{this.state.counterNum}</div>
        <div>總和：{this.state.counterSum}</div>
      </div>
    )
  }
}

export default H3CounterSum;