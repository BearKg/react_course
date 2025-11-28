import React, { useContext } from 'react'
import { NavbarContext, useNavbarContext } from './Navbar'

const UserContainer = () => {
  const {user, logout} = useNavbarContext()
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  )
}

export default UserContainer
