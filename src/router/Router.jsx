import {
    createBrowserRouter,
  } from "react-router";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Root from "../layouts/Root";
import Orders from "../components/Orders/Orders";
import PrivetRoute from "../PrivedRoudts/PrivetRoute";
import Profile from "../components/Profile/Profile";
import Dashbord from "../components/Dashbord/Dashbord";


  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
          index:true,
          path:'/',
          Component:Home,
         },
         {
          path:'login',
          Component:Login,
         },
         {
          path:'register',
          Component:Register,
         },
         {
          path:'orders',
          element: <PrivetRoute><Orders></Orders></PrivetRoute>
         },
         {
          path:'profile',
          element:<PrivetRoute><Profile></Profile></PrivetRoute>
         },
         {
          path:'dashbord',
          element:<PrivetRoute><Dashbord></Dashbord></PrivetRoute>
         }
      ]
    },
  ]);
  