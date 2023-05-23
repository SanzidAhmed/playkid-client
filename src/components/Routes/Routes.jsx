import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoutes from "./PrivateRoutes";
import Mytoys from "../Pages/Mytoys/Mytoys";
import AddToys from "../Pages/AddToys/AddToys";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "signin",
          element:<Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/alltoys",
          element: <AllToys></AllToys>
        },
        {
          path:"/mytoys",
          element: <PrivateRoutes><Mytoys></Mytoys></PrivateRoutes>
        },
        {
          path: "/addtoys", 
          element:<PrivateRoutes><AddToys></AddToys></PrivateRoutes>
        },
        {
          path: "/toy/:id",
          element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://playkid-server.vercel.app/toy/${params.id}`)
        },
        {
          path: "/updatetoy/:id",
          element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
          loader: ({params} ) => fetch(`https://playkid-server.vercel.app/toy/${params.id}`)
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        }
      ]
      
    },
  ]);
  export default router;