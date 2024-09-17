import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation} from "react-router-dom";
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contacts from './pages/Contacts.jsx';
import About from './pages/About.jsx';
import App from './App.jsx'
import './index.css'
import { BackgroundProvider } from './components/BackgroundProvider.jsx';

/*
  Routing of Website Links to Respective Componenets
*/
const router = createBrowserRouter([
  { path: "/", element: <App />, },
  { path: "/projects", element: <Projects />, },
  { path: "/experience", element: <Experience />, },
  { path: "/contacts", element: <Contacts />, },
  { path: "/about", element: <About />, },
]);

// Mount The Root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </BackgroundProvider>
  </StrictMode>,
);
