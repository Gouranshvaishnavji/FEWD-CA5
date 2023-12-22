import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Books from './Books';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Registration from './Registration';
import Navbar from './Navbar';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <>
    <Navbar />
     
      <Routes>
      <Route path='/registration' element={<Registration />}/>
      <Route path='/' element={<Books />}/>
      
    </Routes>
    </>
      </BrowserRouter>
  </React.StrictMode>




)
