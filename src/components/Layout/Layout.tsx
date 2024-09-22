import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../shared/shared_components";

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
