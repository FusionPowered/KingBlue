import React from 'react';
import logo from "./images/king-blue-transparent-logo.png";
import './App.css';

function App() {
  const renderNav = () =>
    <div className="nav">
      <img className="logo" src={logo} alt='logo'/>
      <div className="logobar">
        <ul>
          <li>HOME</li>
          <li>SHOWS</li>
          <li>MERCH</li>
          <li>ABOUT</li>
          <li>INSTA</li>
        </ul>
      </div>
    </div>

  const renderContent = () =>
    <div className="content vignette">
    </div>

  return (
    <div className="App">
      { renderNav() }
      { renderContent() }
    </div>
  );
}

export default App;
