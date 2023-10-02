import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Navbar/footer';
import { Outlet } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

const Layout = () => {
  const layoutData = useRouteLoaderData("layout");
  return (
    <>
      <div className="bg-neutral">
        <Navbar user={layoutData.loggedInUser} />
        <div id="content" className="flex-auto mt-5">
          <Outlet context={[layoutData.sections]} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;