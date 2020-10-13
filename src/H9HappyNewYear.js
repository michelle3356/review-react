import React from 'react';

class H9HappyNewYear extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      year: 2021,
      remaining: (+new Date("2021/01/01 00:00:00") - +new Date())/1000
    }
  }

  componentDidMount() {
    this.setInterval = setInterval(this.backTime.bind(this),
    1000)
  }

  backTime(){
    this.setState({
      remaining: (+new Date("2021/01/01 00:00:00") - +new Date())/1000
    })
  }

  render(){
    return(
      <div>
        <h1>9.距離年底的倒數計時</h1>
        <h2>距離{this.state.year}跨年的倒數計時：剩下
          {Math.floor(this.state.remaining/86400)}天
          {Math.floor(this.state.remaining/60/60%24)}小時
          {Math.floor(this.state.remaining/60)%60}分
          {Math.floor(this.state.remaining%60)}秒
        </h2>
      </div>
    )
  }
}

export default H9HappyNewYear;