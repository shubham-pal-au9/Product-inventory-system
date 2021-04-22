import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing/Routing';
import Header from './Header/header';
import Footer from './Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Routing />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

