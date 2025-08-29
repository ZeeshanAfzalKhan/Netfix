import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
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
            element: <Login />,
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