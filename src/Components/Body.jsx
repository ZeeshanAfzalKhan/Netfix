import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Auth from './Auth'
import Browse from './Browse'
import Slash from './Slash';

const Body = () => {
    const router = createBrowserRouter([
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
    ]); 

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default Body