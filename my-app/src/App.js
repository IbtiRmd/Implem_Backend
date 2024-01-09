import logo from './logo.svg';
import './App.css';

import React from "react";
import "./pages/Main.css";
import { useState } from "react";
import { Routes,Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import User from "./pages/User/User";


function App() 

{
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/User" element={<User/>}></Route>
      <Route></Route>
    </Routes>
  )
}

export default App;
