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
    description: "Developed a Java-based compiler that translates high-level code into executable 6502 assembly language.",
    imageUrl: "../../media/projects/6502.png"
  },
  {
    title: "Chip-8 Interpreter",
    description: "Created a Python interpreter to execute Chip-8 machine code allowing for play of retro games.",
    imageUrl: "../../media/projects/3lRyHa.png"
  },
  {
    title: "Algorithm and Data Structures",
    description: "Key algorithm and data structure concepts such as graph traversal, dynamic programming, hashing, searching, etc",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "AI Menu Alerts",
    description: "An AI-powered dining platform that sends personalized meal alerts using user feedback.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "DOOM Inspired CLI Game",
    description: "A command line game which utilizes ray-tracing and collision detection to deliver DOOM-like experience.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "CRUD RESTful API",
    description: "Simple backend Node.js RESTful API to perform CRUD operations with a MongoDB database.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Arch Linux Hyprland Environment",
    description: "My custom Hyprland dotfiles allowing for a 100% customizable Arch Linux desktop environment.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Windows 2019 Domain Controller",
    description: "A Virtualized Windows Server 2019 Domain Controller with network services mimicing an enterprise environment.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "MQ Ticket Purchasing Lab",
    description: "IBM Lab Completed using Podman and IBM MQ to handle ticket purchase requests on WSL Ubuntu.",
    imageUrl: "https://via.placeholder.com/500"
  }
];


function Projects() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div>
      <Background />
      <NavBar currentPage={currentPage} />
      
      <div className="flex flex-col text-center">
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
