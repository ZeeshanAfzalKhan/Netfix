import { createBrowserRouter } from "react-router-dom";
import Slash from "./Components/Slash";
import Browse from "./Components/Browse";
import Layout from "./Components/Layout";
import { RouterProvider } from "react-router";
import Auth from "./Components/Auth";

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Slash />,
        },
        {
          path: "/login",
          element: <Auth mode={"signin"} />,
        },
        {
          path: "/signup",
          element: <Auth mode={"signup"} />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App;
