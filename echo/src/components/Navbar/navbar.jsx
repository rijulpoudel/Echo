import React from 'react'
import './Navbar.css' //this is to bring in the navbar.css page in react

const Navbar = (props) => {
  return (
    <div className = 'navbar' >

      <h1> {props.color}</h1>
    </div>
  )
}

export default Navbar