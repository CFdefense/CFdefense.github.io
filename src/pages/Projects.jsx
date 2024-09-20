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
    description: "Self-taught and developed a 6502 microprocessor compiler in Java, leveraging core compiler design concepts such as lexical analysis, parsing, semantic analysis, and machine code generation. The compiler translates high-level code into executable 6502 assembly language, providing a deep understanding of low-level architecture and instruction sets.",
    imageUrl: "../../media/projects/6502.png"
  },
  {
    title: "Chip-8 Interpretter",
    description: "Developed a Python-based Chip-8 interpreter adhering to best practices in system organization and architecture. The interpreter efficiently reads ROM files, processes big-endian opcodes, and executes Chip-8 machine code, enabling the gameplay of retro Chip-8 games.",
    imageUrl: "../../media/projects/3lRyHa.png"
  },
  {
    title: "Algorithm and Datastructures",
    description: "Through self-study and completing assignments from the Marist-accredited CMPT435L course, I mastered essential concepts in algorithm design, including graph traversal, dynamic programming, hashing, sorting, searching, and greedy algorithms. This course deepened my understanding of both time and space complexity for efficient algorithm optimization.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "AI Menu Alerts",
    description: "Created an AI-powered dining platform that integrates data from the Marist API and uses an SMTP server to send tailored SMS notifications. User feedback is analyzed with a regression model to predict meal enjoyment, offering a personalized experience based on dining preferences.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "DOOM Inspired CLI Game",
    description: "Designed and created a command-line interface (CLI) game using ray-tracing and collision detection algorithms to simulate a 3D first-person environment. The game mimics the classic DOOM experience, showcasing efficient rendering techniques in a text-based environment.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "CRUD Restful API",
    description: "Implemented a RESTful API using Node.js and Express to perform CRUD operations on a MongoDB database. The API provides efficient handling of create, read, update, and delete operations, showcasing proficiency in backend development.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Arch Linux Hyprland Environment",
    description: "My personal dotfiles for setting up Hyprland on Arch Linux, tailored to create a cohesive and efficient workspace. It includes custom themes and settings for Hyprland, offering a unique and personalized desktop experience. My configuration features a customized Zsh, packed with useful aliases, along with setups for Cava and Hyde. Additionally, it includes fully configured Rofi, Kitty, Swaylock and Waybar config files to ensure a smooth, productive environment.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Windows 2019 Domain Controller",
    description: "I virtualized a Windows Server 2019 instance and promoted it to a Domain Controller (DC) in VirtualBox. I configured essential network services like NAT, DHCP, and DNS, and provided private internet access to Active Directory client VMs, simulating a complete enterprise network environment.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    title: "Ticket Purchasing Lab with Podman and MQ on WSL Ubuntu ",
    description: "Applied Docker and Podman skills from IBM Developer Essentials to manage purchase requests in an IBM MQ lab on WSL Ubuntu. Leveraged message expiry and the Request-Reply transaction pattern to streamline the handling of ticket purchasing requests.",
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
