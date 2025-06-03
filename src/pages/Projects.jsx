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
    title: "Vynn",
    description: "A minimal, keyboard-driven document storage and processing solution that combines the speed and power of Neovim with the simplicity of modern writing tools and intelligent AI RAG agents",
    imageUrl: "../../media/projects/Vynn.gif",
    externalLinks: [
      { url: "https://github.com/CFdefense/Vynn", imgUrl: "../../media/projects/github.png" },
      { url: "https://Vynn.app", imgUrl: "../../media/projects/vynn.png" }
    ]
  },
  {
    title: "6502 Microprocessor Compiler",
    description: "Developed a Java-based compiler that translates high-level code into executable 6502 assembly language.",
    imageUrl: "../../media/projects/compiler.gif",
    externalLinks: [
      { url: "https://github.com/CFdefense/CMPT432N-6502-Java-Compiler", imgUrl: "../../media/projects/github.png" },
      { url: "https://en.wikipedia.org/wiki/MOS_Technology_6502", imgUrl: "../../media/projects/wiki.png" }
    ]
  },
  {
    title: "Chip-8 Interpreter",
    description: "Created a Python interpreter to execute Chip-8 machine code allowing for play of retro games.",
    imageUrl: "../../media/projects/chippy.gif",
    externalLinks: [
      { url: "https://github.com/CFdefense/Chip-8-Emulator", imgUrl: "../../media/projects/github.png" },
      { url: "https://en.wikipedia.org/wiki/CHIP-8", imgUrl: "../../media/projects/wiki.png" }
    ]
  },
  {
    title: "GameBoy Emulator",
    description: "Created a Functional GameBoy Emulator Using Rust. It supports both Game Boy (GB) and Game Boy Color (GBC) games and is designed to be multithreaded for improved performance.",
    imageUrl: "../../media/projects/gameboy.gif",
    externalLinks: [
      { url: "https://github.com/CFdefense/GameBoy", imgUrl: "../../media/projects/github.png" },
      { url: "https://gbdev.io/pandocs/", imgUrl: "../../media/projects/wiki.png" }
    ]
  },
  {
    title: "Algorithm and Data Structures",
    description: "Key algorithm and data structure concepts such as graph traversal, dynamic programming, hashing, searching, etc",
    imageUrl: "../../media/projects/algorithms.gif",
    externalLinks: [
      { url: "https://github.com/CFdefense/CMPT435L", imgUrl: "../../media/projects/github.png" },
      { url: "https://www.labouseur.com/courses/algorithms/", imgUrl: "../../media/projects/wiki.png" }
    ]
  },
  {
    title: "AI Menu Alerts",
    description: "An AI-powered dining platform that sends personalized meal alerts using user feedback.",
    imageUrl: "../../media/projects/wip.png",
    externalLinks: [
      { url: "https://github.com/CFdefense/MenuAlertsAI", imgUrl: "../../media/projects/github.png" },
      { url: "https://dineoncampus.com/marist", imgUrl: "../../media/projects/marist.png" }
    ]
  },
  {
    title: "DOOM Inspired CLI Game",
    description: "A command line game which utilizes ray-tracing and collision detection to deliver DOOM-like experience.",
    imageUrl: "../../media/projects/doom.gif",
    externalLinks: [
      { url: "https://github.com/CFdefense/DoomGame", imgUrl: "../../media/projects/github.png" },
      { url: "https://en.wikipedia.org/wiki/Doom_(franchise)", imgUrl: "../../media/projects/wiki.png" }
    ]
  },
  {
    title: "CRUD RESTful API",
    description: "Simple backend Node.js RESTful API to perform CRUD operations with a MongoDB database.",
    imageUrl: "../../media/projects/crud.gif",
    externalLinks: [
      { url: "https://github.com/CFdefense/CRUD-API", imgUrl: "../../media/projects/github.png" },
      { url: "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete", imgUrl: "../../media/projects/wiki.png" }
    ]
  },
  {
    title: "Arch Linux Hyprland Environment",
    description: "My custom Hyprland dotfiles allowing for a 100% customizable Arch Linux desktop environment.",
    imageUrl: "../../media/projects/hypr.gif"
    ,externalLinks: [
      { url: "https://github.com/CFdefense/dotfiles", imgUrl: "../../media/projects/github.png" },
      { url: "https://wiki.archlinux.org/title/Hyprland", imgUrl: "../../media/projects/wiki.png" }
    ]
  }
];


function Projects() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div>
      <Background />
      <NavBar currentPage={currentPage} />
      
      <div className="flex flex-col text-center items-center justify-center">
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
            externalLinks={project.externalLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
