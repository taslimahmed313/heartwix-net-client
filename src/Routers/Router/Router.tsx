import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layouts/Main/Main";
import AboutRoute from "../../Pages/AboutRoute/AboutRoute";
import Home from "../../Pages/Home/Home/Home";
import PhoneIP from "../../Pages/PhoneIP/PhoneIP";

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
        path: "/about-us",
        element: <AboutRoute />,
      },
      {
        path: "/phone-ip",
        element: <PhoneIP />,
      },
    ],
  },
]);
