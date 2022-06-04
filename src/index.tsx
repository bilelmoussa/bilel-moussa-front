import React from 'react'
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from "react-router-dom"
import CreateGlobalStyle from './styles/global'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import reportWebVitals from './reportWebVitals';

const APP = (<BrowserRouter>
  <ScrollToTop />
  <CreateGlobalStyle />
  <App />
</BrowserRouter>)

ReactDOM.render(APP, document.getElementById("root"));

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
