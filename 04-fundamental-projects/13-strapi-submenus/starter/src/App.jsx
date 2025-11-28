import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import sublinks from './data'

const App = () => {
  return (
    <section>
      <Navbar sublinks={sublinks} />
      <Sidebar sublinks={sublinks} />
      <Hero />
      <Submenu sublinks={sublinks} />
    </section>
  )
};
export default App;
