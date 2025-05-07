import {
    createBrowserRouter,
  } from "react-router";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Root from "../layouts/Root";



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
         }
      ]
    },
  ]);
  