import { useState } from "react"
import NavLinks from "./NavLink"

const Navbar = () => {
    const [user, setUser] = useState({name:'something'})
    const logout = () => {
        setUser(null)
    }
  return (
    <nav className="navbar">
        <h5>context api</h5>
        <NavLinks user={user} logout={logout}/>
    </nav>
  )
}
export default Navbar