import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Navbar/footer';
import { Outlet } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

const Layout = () => {
  const layoutData = useRouteLoaderData("layout");
  return (
    <>
      <div className="">
        <div className='absolute'>
          <Navbar user={layoutData.loggedInUser} />
        </div>
        <div id="content" className="relative">
          <Outlet context={[layoutData.sections]} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout;