import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './context'

const Submenu = ({ sublinks }) => {
  const { pageId, setPageId } = useGlobalContext()
  const focusLink = sublinks.find((sublink) => sublink.pageId === pageId)
  const submenuRef = useRef()

  const handleMouseLeave = (e) => {
    const { clientX, clientY } = e
    const { left, right, bottom } = submenuRef.current.getBoundingClientRect()
    if (clientX < left - 1.5 || clientX > right - 1 || clientY > bottom - 1)
      setPageId(null)
  }

  return (
    <div
      className={focusLink ? 'submenu show-submenu' : 'submenu'}
      ref={submenuRef}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{focusLink?.page}</h5>
      <div className="submenu-links">
        {focusLink?.links.map((link) => {
          return (
            <a key={link.id} href={link.url}>
              {link.icon}
              {link.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
