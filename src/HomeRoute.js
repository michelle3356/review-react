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
          <Route path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default HomeRoute;


