import React from 'react';
import Hw11ColorPaletteInput from './Hw11ColorPaletteInput';

class Hw11ColorPalette extends React.Component{
  constructor(props){
    super(props);
    this.state={
      r:0,
      g:0,
      b:0
    }
  }

  render(){
    const {r, g, b} = this.state;
    return(
      <div>
        <h1>調色盤 Palette</h1>
        <h2>用input type="range",製作拉桿</h2>
        <Hw11ColorPaletteInput colorRange="r" />
        <Hw11ColorPaletteInput colorRange="g" />
        <Hw11ColorPaletteInput colorRange="b" />
        <div style={{backgroundColor:`rgb(${r},${g},${b})`,width: 100, height: 100}}></div>
      </div>
    )
  }
}

export default Hw11ColorPalette;