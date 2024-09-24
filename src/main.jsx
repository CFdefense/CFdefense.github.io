import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contacts from './pages/Contacts.jsx';
import About from './pages/About.jsx';
import App from './App.jsx';
import './index.css';
import { BackgroundProvider } from './components/BackgroundProvider.jsx';

/*
  Routing of Website Links to Respective Components
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </BackgroundProvider>
  </StrictMode>,
);