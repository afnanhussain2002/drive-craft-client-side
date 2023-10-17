import { Root } from "postcss";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
      {
        path:'/',
        element:<Root/>,
        children:[
            {

            }
        ]
      }
  ])

  export default router;