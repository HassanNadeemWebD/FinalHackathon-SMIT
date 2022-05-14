import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from "react-router-dom"
import Home from './Home/Home'
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login';



function App() {
  return (
    <div className="App">
     <Navbar />
     {/* <Carousel/> */}
     
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="courses" element={<Courses />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
