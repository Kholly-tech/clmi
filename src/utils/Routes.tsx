import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Ministries from "../pages/Ministries";
import Livestreams from "../pages/Livestreams";
import Giving from "../pages/Giving";
import Locations from "../pages/Locations";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/ministries",
        element: <Ministries />,
      },
      {
        path: "/livestreams",
        element: <Livestreams />,
      },
      {
        path: "/giving",
        element: <Giving />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
      {
        path: "/*",
        element: <NotFound/>
      }
    ],
  },
]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
