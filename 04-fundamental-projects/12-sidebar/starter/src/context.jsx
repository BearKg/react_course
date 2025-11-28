import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = (props) => {
  // isSidebarOpen and isModalOpen
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Open and close sidebar
  const openSideBar = () => {
    setIsSidebarOpen(true)
  }

  const closeSideBar = () => {
    setIsSidebarOpen(false)
  }

  // Open and close modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSideBar,
        closeSideBar,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default AppContext
