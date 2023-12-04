import React from 'react'
import {
  BrowserRouter as Router, Route, Routes, BrowserRouter,
} from 'react-router-dom'
import Login from './Login'
// import Home from './Home';
import Contact from './Contact';
import About from './About';
import Post from './Post';
import Post1 from './Post1';
import Post2 from './Post2';

const  Home = React.lazy(()=> import ('./Home'))
function Path() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/Post1" element={<Post1 />} />
          <Route path="/Post2" element={<Post2 />} />
          <Route path="/Home" element={<React.Suspense fallback={<p>Loading ..</p>}><Home/></React.Suspense>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<h1>Not Found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path