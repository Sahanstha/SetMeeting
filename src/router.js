import Details from "components/Details";
import HomeData from "components/HomeData";
import Navbar from "components/Navbar";
import Submit from "components/Submit";
import ThirtyMin from "components/ThirtyMin";
import ToDo from "components/ToDo";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <HomeData />,
      },
      {
        path: "todo",
        element: <ToDo />,
      },
      {
        path: "/:id",
        element: <ThirtyMin />,
      },

      {
        path: "/details/:pathDetail",
        element: <Details />,
      },
    ],
  },
  {
    path: "/submit/:redo",
    element: <Submit />,
  },
]);
