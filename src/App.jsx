import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react'
import './App.css'
import Nav from './components/ui/nav'
import Demo1 from './components/pages/Demo1'
import Demo2 from './components/pages/Demo2'
import Demo3 from './components/pages/Demo3'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Demo1 />} /> {/* Default route for the home page */}
        <Route path='/Demo1' element={<Demo1 />} />
        <Route path="/Demo2" element={<Demo2 />} />
        <Route path="/Demo3" element={<Demo3 />} />
      </Routes>
    </Router>
  )
}

export default App;

