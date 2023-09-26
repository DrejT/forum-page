import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Navbar/footer';
import { Outlet } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

const Layout = () => {
  const layoutData = useRouteLoaderData("layout");
  return (
    <>
      <div>
        <Navbar user={layoutData.loggedInUser} />
        <div id="content">
          <Outlet context={[layoutData.sections]}/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;