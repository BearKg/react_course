import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { links, social } from "./data";

const App = () => {

  return (
    <section>
      <Home/>
      <Modal/>
      <Sidebar links={links} social={social}/>
    </section>
  )
};
export default App;
