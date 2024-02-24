import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react'
import './App.css'
import Nav from './components/ui/nav'
import Demo1 from './components/pages/Demo1'
import Demo2 from './components/pages/Demo2'
import Demo3 from './components/pages/Demo3'


function App() {
  return (
    <>
      <Nav/>
    </>
  )
}

export default App
