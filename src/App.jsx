import { useState } from 'react'


import '../src/index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "../src/components/Login.jsx";
import Signup from "../src/components/SignUp.jsx";
import Homee from "../src/components/Dummy.jsx";

function App() {


  return (
    <>

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Homee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </>
  )
}

export default App
