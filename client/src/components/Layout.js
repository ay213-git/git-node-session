import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';


const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;