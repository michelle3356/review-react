import React from 'react';

class Welcome extends React.Component{
  constructor(){
    super();

  }
//元件初次掛載完成後
  componentDidMount(){

  }

//元件數據產生改變,改變完成後
  componentDidUpdate(){

  }



  render(){
    return(

      <div>Welcome, {this.props.name}</div>
    )


  }
}

export default Welcome;



/**
 * 生命週期
 * 1.constructor
 * 2.render
 * 3.componentDidMount(cdm)
 * 4.render(props update, state update)
 * 5. componentDidUpdate(cdup)
 */