import React from 'react'
import {
  BrowserRouter as Router, Route, Routes, BrowserRouter,
} from 'react-router-dom'
import Sidebar from '../Layout/Sidebar'
import Header from '../Layout/Header'
import Pagelayout from '../Layout/Pagelayout'
import Login from './Login'


function Path() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/Pagelayout" element={<Pagelayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path