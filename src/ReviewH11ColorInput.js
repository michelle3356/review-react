import React, { Component } from 'react'


class ReviewH11ColorInput extends React.Component{

  render(){
    const value = this.props;

    return(
      <div>
        <input
        type="range"
        min="0"
        max="255"
        step="1" />
      </div>
    )
  }

}

export default ReviewH11ColorInput;