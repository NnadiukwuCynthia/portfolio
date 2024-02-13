import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './assets/Style/main.scss'
import Root from './components/Root.jsx';
import Skill from './Pages/Skills.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import Project from './Pages/Projects.jsx';
import ContactMe from './Pages/Contact.jsx';
import HomeMenu from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        index: true,
        element: <HomeMenu/>
      },
      {
        path: '/contact',
        element: <ContactMe/>
      },
      {
        path: '/skill',
        element: <Skill/>
      },
      {path: '/about',
        element: <AboutMe/>
      },
      {path: '/project',
        element: <Project/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
)
