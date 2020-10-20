import React from 'react';

class H10TwdTransUsa extends React.Component{
  constructor(props){
    super(props);
    this.state={
      number: 0
    }
  }

  render(){
    return(
      <div>
        <h1>10.匯率轉換</h1>
        <h2> 台幣(TWD) 與 美金(USD) 轉換</h2>
        <h3> 於台幣格 與 美金格 任意輸入數字，即可造成另一邊自動轉換。</h3>
        <div> 1美金 = 30 台幣</div>
        <input type="text" name="twd" placeholder="請輸入台幣" value={this.state.number} />
        <input type="text" name="usa" placeholder="請輸入美金" value={this.state.number} />
      </div>
    )
  }
}

export default H10TwdTransUsa;