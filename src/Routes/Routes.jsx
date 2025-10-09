import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Installation from "../pages/Installation/Installation";
import Apps from "../pages/Apps/Apps";
import PageError from "../pages/PageError/PageError";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageError></PageError>,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails></AppDetails>,
      },
    ],
  },
]);
