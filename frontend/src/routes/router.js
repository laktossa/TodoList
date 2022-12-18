import { createBrowserRouter } from "react-router-dom";
import Form from "../components/Form";

import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  {
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "signup",
        element: <Form />,
      },
    ],
  },
  { path: "home", element: <HomePage /> },
]);

export default router;
