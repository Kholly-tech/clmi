import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="w-full min-h-[calc(100vh-80px)] my-2 px-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
