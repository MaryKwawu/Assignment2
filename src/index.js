import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import Nav from './Components/Nav';
import Header from "./Components/Header";
import About from "./Components/About";
import Inventory from "./Components/Inventory";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <main>
      <About />

      <div id="hr">
        <hr className="container" />
      </div>
      <Inventory />

      <Contact />
    </main>
   

    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
