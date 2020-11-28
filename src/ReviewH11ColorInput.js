import React, { Component } from 'react';

const Name = {
  r: 'Red',
  g: 'Green',
  b: 'Blue'
}
class ReviewH11ColorInput extends React.Component{


  handleChange = (e) => {
    this.props.onChangeColor(this.props.colorRange, e.target.value);
  }

  render(){
    const {colorValue, colorRange} = this.props;

    return(
      <div>
        <label>{Name[colorRange]}</label>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          value={colorValue}
          onChange={this.handleChange.bind(this)} />
      </div>
    )
  }

}

export default ReviewH11ColorInput;