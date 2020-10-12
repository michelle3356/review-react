import React from 'react';

class H8ButtonNumSum extends React.Component{
  constructor(){
    super();

    this.state = {
      sum: 0
    }
  }

  handleClick = (e) => {
    // console.log(e.target.value)
  
    this.setState({
      sum: this.state.sum + +e.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>8.將按到的數字相加起來</h1>
        <button onClick={this.handleClick.bind(this)} value="1">1</button>
        <button onClick={this.handleClick.bind(this)} value="2">2</button>
        <button onClick={this.handleClick.bind(this)} value="3">3</button>
        <button onClick={this.handleClick.bind(this)} value="4">4</button>
        <button onClick={this.handleClick.bind(this)} value="5">5</button>
        <button onClick={this.handleClick.bind(this)} value="6">6</button>
        <button onClick={this.handleClick.bind(this)} value="7">7</button>
        <button onClick={this.handleClick.bind(this)} value="8">8</button>
        <button onClick={this.handleClick.bind(this)} value="9">9</button>
        <h3>加總的數字：{this.state.sum}</h3>
      </div>
    )
  }
}

export default H8ButtonNumSum;