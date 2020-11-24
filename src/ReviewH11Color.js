import React, { Component } from 'react'

class ReviewH11Color extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      r: 0,
      g: 0,
      b: 0
    }
  }

  render(){

    const {r, g, b} = this.state;
    return(
      <div>
        <h1>調色盤</h1>
        <h2>用input type="range",製作拉桿</h2>
        <input type="range" />

      </div>
    )
  }
}

export default ReviewH11Color;