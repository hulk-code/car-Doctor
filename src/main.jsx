import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import Router from './Components/Router/Router';
import AuthProvider from './Components/AuthPrivider/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl mx-auto'>
<React.StrictMode>
  <AuthProvider><RouterProvider router={Router} /></AuthProvider>

  </React.StrictMode>,
</div>
)
