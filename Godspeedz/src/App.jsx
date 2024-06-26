import React from 'react';
import './App.css';

import Home from "./Routes/User/Home";
import About from "./Routes/User/About";
import Calender from "./Routes/User/Calender";
import Donate from "./Routes/User/Donate";
import Map from "./Routes/User/Map";
import Members from "./Routes/User/Members";
import Statistics from "./Routes/User/Statistics";

import { Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/About" element = {<About />} />
      <Route path="/Calender" element = {<Calender />} />
      <Route path="/Donate" element = {<Donate />} />
      <Route path="/Map" element = {<Map />} />
      <Route path="/Members" element = {<Members />} />
      <Route path="/Statistics" element = {<Statistics />} />
    </Routes>
    </>
    
  );
}

export default App;
