import React from 'react'
import logo from './cart2.jpg'
import './header.css' 
const Header = () => {
  return (
   
       
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src={logo}
          class="me-2"
          height="20"
          alt=""
          loading="lazy"
        />
        <small>EL DORADO</small>
      </a>
    </div>
  </nav>
  )
}

export default Header
