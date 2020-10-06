import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Home extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/App">App</Link></li>
          <li><Link to="/H1Counter">H1Counter</Link></li>
          <li><Link to="/H2CounterList">H2CounterList</Link></li>
          <li><Link to="/H3CounterSum">H3CounterSum</Link></li>
          <li><Link to="/H4BMI">H4BMI</Link></li>
          <li><Link to="/H5ItemList">H5ItemList</Link></li>
          <li><Link to="/H6RemoveList">H6RemoveList</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;