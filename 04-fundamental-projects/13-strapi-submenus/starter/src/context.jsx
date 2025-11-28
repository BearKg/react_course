import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = (props) => {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [pageId, setPageId] = useState(null)

  const closeSidebar = () => {
    setIsSideOpen(false)
  }
  const openSidebar = () => {
    setIsSideOpen(true)
  }

  return (
    <GlobalContext.Provider
      value={{ isSideOpen, closeSidebar, openSidebar, pageId, setPageId}}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
export default AppContext
