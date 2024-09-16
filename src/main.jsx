import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contacts from './pages/Contacts.jsx';
import About from './pages/About.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Projects",
    element: <Projects />,
  },
  {
    path: "Experience",
    element: <Experience />,
  },
  {
    path: "Contacts",
    element: <Contacts />,
  },
  {
    path: "About",
    element: <About />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
