import { createBrowserRouter, redirect } from "react-router-dom";
import Form from "../components/Form";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/signin");
      }
      return null;
    },
  },
  {
    element: <LandingPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
    children: [
      {
        path: "/signin",
        element: <Form />,
      },
      {
        path: "/signup",
        element: <Form />,
      },
    ],
  },
]);

export default route;
