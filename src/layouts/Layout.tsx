import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="w-full min-h-[calc(100vh-80px)] mt-7 mb-5 px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
