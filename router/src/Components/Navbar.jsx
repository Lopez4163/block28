import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default Navbar
