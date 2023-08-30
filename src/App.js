
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  BrowserRouter,
  Routes,
} from "react-router-dom";

export default class  extends Component {
  
  render() {
  
    return (
      
      <div> 
        <BrowserRouter>
  <Navbar/>
  
    <Routes>
    <Route path="/" element={<News pageSize ={6} country="in" category="general"/>} />
        <Route path="/science" element={<News pageSize ={6} country="in" category="science"/>} />
        <Route path="/business" element={<News pageSize ={6} country="in" category="business"/>} />
        <Route path="/entertainment" element={<News pageSize ={6} country="in" category="entertainment"/>} />
        <Route path="/health" element={<News pageSize ={6} country="in" category="health"/>} />
        <Route path="/sports" element={<News pageSize ={6} country="in" category="sports"/>} />
        <Route path="/technology" element={<News pageSize ={6} country="in" category="technology"/>} />
          </Routes>
        
  </BrowserRouter>
      </div>
      
    )
  }
}

