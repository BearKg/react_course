import { createContext, useContext, useState } from 'react'
import NavLinks from './NavLink'

export const NavbarContext = createContext() // tạo ra một object có hai thuộc tính: Provider và Consumer.
export const useNavbarContext = () => useContext(NavbarContext) //

const Navbar = () => {
  const [user, setUser] = useState({ name: 'something' })
  const logout = () => {
    setUser(null)
  }

  console.log(NavbarContext)
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>context api</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar

// Provider được sử dụng để bọc các component con mà cần truy cập vào dữ liệu context.

// Consumer được sử dụng để truy cập vào dữ liệu context từ bất kỳ component con nào.