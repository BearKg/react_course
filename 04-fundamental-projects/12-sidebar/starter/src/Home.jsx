import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./context"

const Home = () => {
    const { openSideBar, openModal } = useGlobalContext()
  return (
    <section id="home">
        <button className="open-sidebar-btn" onClick={openSideBar}>
            <FaBars/>
        </button>
        <button className="open-modal-btn btn" onClick={openModal}>
            show modal
        </button>
    </section>
  )
}
export default Home