import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layouts/Main/Main";
// import About from "../../Pages/Home/About/About";
import Brands from "../../Pages/Home/Brands/Brands";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/Home/About/About";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/brands",
        element: <Brands />,
      },
     
    ],
  },
]);
