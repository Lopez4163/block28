import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./index.css"
import Page1 from "./Components/Page1"
import Page2 from "./Components/Page2"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"

function App() {
  return (
    <div id="main-section">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/red" element={<Page1 />} />
        <Route path="/blue" element={<Page2 />} />
      </Routes>
    </div>
  )
}

export default App
