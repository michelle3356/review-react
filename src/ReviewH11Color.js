import React, { Component } from 'react'
import ReviewH11ColorInput from './ReviewH11ColorInput';


class ReviewH11Color extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      r: 0,
      g: 0,
      b: 0
    }
  }

  handleChangeColor = (colorRange, value) => {
    // console.log(colorRange, value)
    this.setState({
      [colorRange]: value,
    })
  }

  render(){

    const {r, g, b} = this.state;

    return(
      <div>
        <h1>調色盤</h1>
        <h2>用input type="range",製作拉桿</h2>
        <ReviewH11ColorInput colorRange="r" onChangeColor={this.handleChangeColor} colorValue={r} />
        <ReviewH11ColorInput colorRange="g" onChangeColor={this.handleChangeColor} colorValue={g} />
        <ReviewH11ColorInput colorRange="b" onChangeColor={this.handleChangeColor} colorValue={b} />
        <div style={{width: 100, height: 100, background: `rgb(${r}, ${g}, ${b}`}}></div>
      </div>
    )
  }
}

export default ReviewH11Color;