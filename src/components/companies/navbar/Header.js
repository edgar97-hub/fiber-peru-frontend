import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import logo from '../../../assets/images/logo2-1.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  const [click, setClick] = useState(false)
  const handleclick = () => {
    setClick(!click)
  }
  return (
    <div className="nav-companies">
      <div className="logo">
        <img
          src={logo}
          onClick={() => {
            window.open('test', '_blank').focus()
          }}
          style={{
            marginLeft: '0px',
            marginRight: '10px',
            width: '8rem',
            height: '4rem',
          }}
        />
        <div className="logo-info">
          <a href="/hogar">HOGAR</a>
          <a href="/empresas">EMPRESAS</a>
        </div>
      </div>

      <Navbar click={click} handleclick={handleclick} />
      <div className="mobileIcon" onClick={handleclick}>
        {' '}
        {click ? <FaTimes /> : <FaBars />}{' '}
      </div>
    </div>
  )
}

export default Header
