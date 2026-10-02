import React from 'react'

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Product from './pages/Product'
import Details from './pages/Details'
import About from './pages/About'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/'  element = {<Home/>}/>
          <Route path='/products' element = {<Product/>}/>
          <Route path='/details/*' element = {<Details/>}/>
          <Route path='/about' element = {<About/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}
