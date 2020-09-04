import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    //BEM naning convention
    <div className="App">
      {/* <h1>Hello!! Let's build :) </h1> */}
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>

  );
}

export default App;


{/* Header */ }
{/*Sidebar */ }
{/* react-router --> chat screen */ }
