import React, { useRef } from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linkContainerRef = useRef(null)
    const linkRef = useRef(null)

    const toggleBtn = () => {
        setShowLinks(!showLinks)
    }

    const linkStyle = {
        height: showLinks ? `${linkRef.current.getBoundingClientRect().height}px`:`0px`
    }

  return (
    <section className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleBtn}>
            <FaBars />
          </button>
        </div>
    <div className="link-container" ref={linkContainerRef} style={linkStyle}>
       <ul className="nav-links" ref={linkRef}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            )
          })}
        </ul>
    </div>

        <ul className="nav-contact-links">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Navbar
