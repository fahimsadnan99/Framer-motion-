import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
