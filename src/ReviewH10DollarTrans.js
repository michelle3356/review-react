import React from 'react';
import ReviewH10DollarTransInput from './ReviewH10DollarTransInput';



function toUSA(Twd){
  console.log(Twd)
  return Twd * 30;
}

function toTWD(Usd){
  console.log(Usd)
  return Usd / 30;
}

// 傳入轉換的方法
function verify(value, convertFunc){
  console.log('verify',value, convertFunc)
  const input = parseFloat(value);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convertFunc(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

class ReviewH10DollarTrans extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dollar: 0,
      unit: 'twd'
    }
  }

  handleTransTWD = (propsNum, unit) => {
    console.log('handleTransTWD:', propsNum, unit)
    this.setState({
      dollar: propsNum,
      unit
    })
  }

  handleTransUSA = (propsNum, unit) => {
    console.log('handleTransUSA:', propsNum, unit)
    this.setState({
      dollar: propsNum,
      unit
    })
  }

  render(){
    const dollar = this.state.dollar;
    const unit = this.state.unit;
    const twdNum = unit ==='twd' ? dollar : verify(dollar,toUSA);
    const usaNum = unit ==='usa' ? dollar : verify(dollar,toTWD);
    return(
      <div>
        <h1>台幣與美金匯率轉換</h1>
        <h3>1美金＝30台幣</h3>
        <ReviewH10DollarTransInput 
          unit="twd"
          number={twdNum}
          onTrans={this.handleTransTWD}
        />
        <ReviewH10DollarTransInput 
          unit="usa"
          number={usaNum}
          onTrans={this.handleTransUSA}
        />
      </div>
    )
  }
}

export default ReviewH10DollarTrans;