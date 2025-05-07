import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router";
import { router } from './router/Router.jsx';
import AuthProvaider from './contexts/AuthProvaider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
    <RouterProvider router={router} />
    </AuthProvaider>
  </StrictMode>,
)
