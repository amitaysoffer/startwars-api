import React from 'react'
import Yoda from '../images/yoda.png'

function Header() {
  return (
    <div className="hero">
      <div className="header-title">STAR WARS API</div>
      <img src={Yoda} className="yoda" alt="yoda"/>
    </div>
  )
}

export default Header

