import { createBrowserRouter } from "react-router-dom";
import Success from "../pages/Success";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/success/:id",
    element: <Success></Success>,
  },
]);

export default router;
