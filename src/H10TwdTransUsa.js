import React from 'react';
import H10TwdTransUsaInput from './H10TwdTransUsaInput';

function toTWD(USD) {
  return USD / 30;
}

function toUSD(TWD) {
  return TWD * 30;
}
function convert(value, convert){
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
  
}
class H10TwdTransUsa extends React.Component{
  constructor(props){
    super(props);
    this.state={
      number: 0,
      unit: 'twd'
    }
  }

  handleTransTWD = (propsNum, unit) => {
    console.warn(propsNum, unit)
    this.setState({
      number:propsNum,
      unit
    })
  }

  handleTransUSA = (propsNum, unit) => {
    this.setState({
      number: propsNum,
      unit
    })
  }

  render(){
    const number = this.state.number;
    const unit = this.state.unit;
    const twdNum = unit === 'twd' ? number: convert(number, toUSD);
    const usaNum = unit === 'usa' ? number: convert(number, toTWD);
    return(
      <div>
        <h1>10.匯率轉換</h1>
        <h2> 台幣(TWD) 與 美金(USD) 轉換</h2>
        <h3> 於台幣格 與 美金格 任意輸入數字，即可造成另一邊自動轉換。</h3>
        <div> 1美金 = 30 台幣</div>
        <H10TwdTransUsaInput
        unit="twd"
        onTrans={this.handleTransTWD}
        number={twdNum} />
        <H10TwdTransUsaInput
        unit="usa"
        onTrans={this.handleTransUSA}
        number={usaNum}  />
      </div>
    )
  }
}

export default H10TwdTransUsa;