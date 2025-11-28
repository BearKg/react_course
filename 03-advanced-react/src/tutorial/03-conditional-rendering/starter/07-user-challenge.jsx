import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({name: 'Van Huynh'})
  }

  const logout = () => {
    setUser(null)
  }
  
  const LoginComponent = ({name}) => {
    return (
      <>
        <h4>hello there, {name}</h4>
        <button className="btn" onClick={logout}>logout</button>
      </>
    )
  }

  const LogoutComponent = () => {
    return (
      <>
        <h4>please login</h4>
        <button className="btn" onClick={login}>login</button>
      </>
    )
  }

  return (
    <div>
      {user ? <LoginComponent name={user.name}/> : <LogoutComponent/>}
    </div>
  )
};


export default UserChallenge;
