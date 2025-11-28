import { useState } from 'react'


const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue)
  const toggle = () => {
    return setShow(!show)
  }
  return { show, toggle }
}

export default useToggle
