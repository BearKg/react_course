import { useEffect, useRef } from "react"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./context"

const Sidebar = ({ sublinks }) => {
  const {isSideOpen, closeSidebar} = useGlobalContext()
  const sidebarRef = useRef()
  
  useEffect(() => {
      sidebarRef.current.classList.toggle('show-sidebar')
  }, [isSideOpen])
  return (
    <div className="sidebar" ref={sidebarRef}>
      <div className="sidebar-container">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes/>
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink) => {
            return (
              <article key={sublink.pageId}>
                <h4>{sublink.page}</h4>
                <div className="sidebar-sublinks">
                  {sublink.links.map((link) => {
                    return (
                      <a key={link.id} href={link.url}>
                        {link.icon}
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Sidebar
