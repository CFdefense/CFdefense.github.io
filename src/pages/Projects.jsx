import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import ProjectContents from "../components/ProjectContents";
import Header from "../components/Header"; // Import the Header component
import { Reveal } from "../animations/reveal";
import { FadeIn } from "../animations/fadeIn";

// project data
const projectData = [
  {
    title: "6502 Microprocessor Compiler",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula, dui at iaculis cursus, eros purus ultricies odio.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Chip-8 Interpretter",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Algorithm and Datastructures",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "AI Menu Alerts",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "DOOM Inspired CLI Game",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "CRUD Restful API",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Arch Linux Hyprland Environment",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Windows 2019 Domain Controller",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
  
];

function Projects() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div>
      <Background />
      <NavBar currentPage={currentPage} />
      
      <div className="flex flex-col">
        <FadeIn>
          <Header title="Projects" />
        </FadeIn>
        {/* Render ProjectContents for each project */}
        {projectData.map((project, index) => (
          <ProjectContents
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
