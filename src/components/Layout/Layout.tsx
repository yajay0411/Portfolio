import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../shared/shared_components";

const Layout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
