import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = ({ sublinks }) => {
  const { openSidebar, setPageId } = useGlobalContext()
  const hideLink = (e) => {
    if (!e.target.classList.contains('nav-link')) setPageId(null)
  }
  return (
    <nav onMouseOver={hideLink}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>

        <div className="nav-links">
          {sublinks.map((link) => {
            return (
              <button
                key={link.pageId}
                className="nav-link"
                onMouseOver={() => setPageId(link.pageId)}
              >
                {link.page}
              </button>
            )
          })}
        </div>

        <button onClick={openSidebar} className="toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  )
}
export default Navbar
