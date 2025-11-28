import { useState } from 'react'

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <Component/>}
    </div>
  )
}

const Component = () => {
  return (
    <>
      <h2>This is component</h2>
    </>
  )
}

export default ToggleChallenge
