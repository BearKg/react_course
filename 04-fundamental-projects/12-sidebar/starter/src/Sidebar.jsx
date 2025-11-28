import { FaTimes } from 'react-icons/fa'
import logo from './logo.svg'
import { useEffect, useRef } from 'react'
import { useGlobalContext } from './context'

const Sidebar = ({ links, social }) => {
  const {isSidebarOpen, closeSideBar} = useGlobalContext()
  const sidebarRef = useRef(null)

  useEffect(() => {
    console.log(sidebarRef.current)
    sidebarRef.current.classList.toggle('show-sidebar')
  }, [isSidebarOpen])
  return (
    <section id="sidebar" className='sidebar' ref={sidebarRef}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>

      <ul className="sidebar-links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                <i className='link-icon'>{link.icon}</i>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className="contact-links">
        {social.map(item => {
          return (
            <li key={item.id}>
              <a href={item.url}>
                <i className='contact-icon'>{item.icon}</i>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default Sidebar
