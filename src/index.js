import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Highlights from './pages/Highlights';
import AboutMe from './pages/AboutMe';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
  <Switch>
   <Route exact path="/" component={App} />
   <Route path="/Highlights" component={Highlights} />
   <Route path="/AboutMe" component={AboutMe} />
 </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);

/*
<React.StrictMode>
    <App />
  </React.StrictMode>,
  */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
