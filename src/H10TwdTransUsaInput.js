import React, { Component } from 'react';

class H10TwdTransUsaInput extends React.Component{
  constructor(props){
    super(props);

  }


  handleChange = (e) => {
    this.props.onTrans(e.target.value)
  }
  render(){
    const number = this.props.number;
    const unit = this.props.unit;
    return(
      <div>
        <input 
          type="text"
          value={number}
          onChange={this.handleChange.bind(this)}
        />{unit}
      </div>
    )
  }
}

export default H10TwdTransUsaInput;