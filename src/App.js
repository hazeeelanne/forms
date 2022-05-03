import React from 'react';
import './App.css';
import Form2 from './Form2';
import Form from './Form';
import {Switch, Route, Router} from 'react-router-dom';

function App() {
  return(
    <>

  <div>
    <Switch>
      <Route exact path="/" component = {Form}/>
      <Route exact path="/form2" component = {Form2}/>
    </Switch>
  </div>
  </>
  );
  
}

export default App;
