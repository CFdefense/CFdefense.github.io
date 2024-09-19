import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import ProjectContents from "../components/ProjectContents";
import Header from "../components/Header"; // Import the Header component

// Sample project data
const projectData = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula, dui at iaculis cursus, eros purus ultricies odio.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Project 2",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
];

function Projects() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div className="overflow-x-hidden h-screen">
      <Background />
      <NavBar currentPage={currentPage} />
      <Header title="Projects" />
      <div className="mt-12">
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
