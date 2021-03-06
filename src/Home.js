import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Home extends React.Component{
  render(){
    return(
      <div>
        <h1>React Practice</h1>
        <ul>
          <li><Link to="/App">App</Link></li>
          <li><Link to="/H1Counter">H1Counter</Link></li>
          <li><Link to="/H2CounterList">H2CounterList</Link></li>
          <li><Link to="/H3CounterSum">H3CounterSum</Link></li>
          <li><Link to="/H4BMICalculate">H4BMICalculate</Link></li>
          <li><Link to="/H5ItemList">H5ItemList</Link></li>
          <li><Link to="/H6RemoveList">H6RemoveList</Link></li>
          <li><Link to="/H7PersonTable">H7PersonTable</Link></li>
          <li><Link to="/H8ButtonNumSum">H8ButtonNumSum</Link></li>
          <li><Link to="/H9HappyNewYear">H9HappyNewYear</Link></li>
          <li><Link to="/H10TwdTransUsa">H10TwdTransUsa</Link></li>
          <li><Link to="/Hw11ColorPalette">Hw11ColorPalette</Link></li>
          <li><Link to="/Hw12Tab">Hw12Tab</Link></li>
          <li><Link to="/ReviewH10DollarTrans">ReviewH10DollarTrans</Link></li>
          <li><Link to="/ReviewH11Color">ReviewH11Color</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;