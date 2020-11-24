import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import App from './App';
import H1Counter from './H1Counter';
import H2CounterList from './H2CounterList';
import H3CounterSum from './H3CounterSum';
import H4BMI from './H4BMI';
import H5ItemList from './H5ItemList';
import H6RemoveList from './H6RemoveList';
import H7PersonTable from './H7PersonTable';
import H8ButtonNumSum from './H8ButtonNumSum';
import H9HappyNewYear from './H9HappyNewYear';
import H10TwdTransUsa from './H10TwdTransUsa';
import Hw11ColorPalette from './Hw11ColorPalette';
import ReviewH10DollarTrans from './ReviewH10DollarTrans';
import ReviewH11Color from './ReviewH11Color';

import * as serviceWorker from './serviceWorker';


function HomeRoute (){
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/App"><App /></Route>
          <Route path="/H1Counter"><H1Counter /></Route>
          <Route path="/H2CounterList"><H2CounterList /></Route>
          <Route path="/H3CounterSum"><H3CounterSum /></Route>
          <Route path="/H4BMI"><H4BMI /></Route>
          <Route path="/H5ItemList"><H5ItemList /></Route>
          <Route path="/H6RemoveList"><H6RemoveList /></Route>
          <Route path="/H7PersonTable"><H7PersonTable /></Route>
          <Route path="/H8ButtonNumSum"><H8ButtonNumSum /></Route>
          <Route path="/H9HappyNewYear"><H9HappyNewYear /></Route>
          <Route path="/H10TwdTransUsa"><H10TwdTransUsa /></Route>
          <Route path="/Hw11ColorPalette"><Hw11ColorPalette /></Route>
          <Route path="/ReviewH10DollarTrans"><ReviewH10DollarTrans /></Route>
          <Route path="/ReviewH11Color"><ReviewH11Color /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default HomeRoute;


