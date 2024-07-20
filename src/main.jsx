import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobDescriptionPage from './pages/JobDescriptionPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path='jobs' element={<JobsPage/>}/>
      <Route path='jobs:jobId' element={<JobDescriptionPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
