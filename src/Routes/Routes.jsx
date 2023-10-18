
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

  const router = createBrowserRouter([
      {
        path:'/',
        element:<Root></Root>,
        children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/addproduct',
              element:<AddProduct></AddProduct>
            },
            {
              path:'/cart',
              element:<MyCart></MyCart>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            }
        ]
      }
  ])

  export default router;