import React, { Component } from 'react';

const ColorName = {
  r: 'Red 紅色',
  g: 'Green 綠色',
  b: 'Blue 藍色'
}

// 這邊不需要 state
export default class Hw11ColorPaletteInput extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     colorValue: 0
  //   }
  // };


  handleChange = (e) => {
    // this.setState({
    //   colorValue: e.target.value
    // });
    this.props.onChangeColor(this.props.colorRange, e.target.value);
  }

  render() {
    const {
      colorRange,
      colorValue,
    } = this.props;
    
    return (
      <div>
        <label>{ColorName[colorRange]}</label>
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
