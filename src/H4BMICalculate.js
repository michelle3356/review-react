import React from 'react';

class H4BMI extends React.Component{
  constructor(){
    super();
    this.state={
      weight: '',
      height: '',
      bmi: ''
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    const bmiValue = this.state.weight / ((this.state.height/100)*(this.state.height/100))
    this.setState({
      bmi: bmiValue
    })
  }


  render(){
    return(
      <div>
        <h1>4.BMI</h1>
        <h3>BMI計算公式：體重（公斤）/身高（公分）的2次方</h3>
        <div>身高
          <input 
          type="text" 
          name="height"
          vlaue={this.state.height}
          onChange={this.handleChange} />公分
        </div>
        <div>體重
        <input
          type="text" 
          name="weight"
          vlaue={this.state.weight}
          onChange={this.handleChange} />公斤</div>
        <button onClick={this.handleClick}>計算BMI數值</button>
        <div>BMI{this.state.bmi}</div>
      </div>
    )
  }
}

export default H4BMI;