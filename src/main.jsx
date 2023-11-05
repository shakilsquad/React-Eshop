import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {  RouterProvider } from 'react-router-dom'
import createdMyRouter from './Route/Route'
// const createdMyRouter = createBrowserRouter([
//   {
//     path:'/',
//     element:<div className='container mx-auto'>This  is My First Router</div>
//   },
//   {
//     path:"/product",
//     element:<div>This Is a Product section</div>
//   },
//   {
//     path:"/about",
//     element:<div>This is a About section</div>
//   },
//   {
//     path:"/dashbord",
//     element:<div>This is a About section</div>
//   }
// ])
// const createdMyRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<MainLayout></MainLayout>,
//     children:[
//       {
//         path:'/',
//         element:<Home></Home>
//       },
//       {
//         path:"/product",
//         element:<Products></Products>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createdMyRouter}></RouterProvider>
  </React.StrictMode>,
)
