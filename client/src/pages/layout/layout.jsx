import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Navbar/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
      <div>
        <Navbar/>
        <div id="content">
          <Outlet/>
        </div>
        <Footer/>
      </div>
  )
}

export default Layout;