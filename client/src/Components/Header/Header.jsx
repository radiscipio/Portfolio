import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header-container'>
      <div className='logo'>RdS</div>
      <div className='navbar'>
        <a>Home</a>
        <a>Projects</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </div>
  )
}
export default Header