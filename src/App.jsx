import React from 'react'
import Grid from './components/Grid.jsx'
import './App.css'
import Design from './components/Design.jsx'
import Projects from './components/Projects.jsx' 
import Contact from './components/Contact.jsx' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Grid />,
    },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/design',
    element: <Design />,
  },
{
  path: '/contact',
  element: <Contact />,
}
])
  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
