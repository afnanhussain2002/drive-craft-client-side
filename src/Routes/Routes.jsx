
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Private/PrivateRoute";
import BrandDetails from "../components/BrandDetails";

import UpdateProduct from "../Pages/UpdateProduct";
import ErrorPage from "../Pages/ErrorPage";

  const router = createBrowserRouter([
      {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/addproduct',
              element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
              path:'/cart',
              element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
              loader: ()=> fetch('http://localhost:5000/cart')
            },
            {
              path:'/:brand',
              element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
              loader:() => fetch(`http://localhost:5000/products`)
            },
           {
            path:'/update/:id',
            element:<UpdateProduct></UpdateProduct>,
            loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
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