import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return(
    
    <nav className="nav">
    <Link to="/" className="site-title">
      <img src='../logo1.png' alt='logo1'/>
      Bean and Brew
    </Link>

    <ul>
      <li>
        <Link to="/Menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/Services">Our Services</Link>
      </li>
      <li>
        <Link to="/Coffee">The Coffee</Link>
      </li>
    </ul>
  </nav>
  )
}