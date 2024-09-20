import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import ExperienceContent from "../components/ExperienceContents";
import { Reveal } from "../animations/reveal";
import { FadeIn } from "../animations/fadeIn";

// Sample project data
const experienceData = [
  {
    company: "Avangrid Networks",
    title: "Mobile Application Management and Virtual Desktop Infrastructure Intern",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula, dui at iaculis cursus, eros purus ultricies odio.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    company: "Marist College Information Technology",
    title: "Lead Telecommunications Technician",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
  {
    company: "Marist College School of Computer Science and Mathematics",
    title: "Programming Lab Tutor",
    description: "Sed euismod orci a lectus hendrerit, ac condimentum urna aliquet. Integer aliquam magna ut vehicula lacinia.",
    imageUrl: "https://via.placeholder.com/500"
  },
];

function Experience() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
      <div>
        <Background />
        <NavBar currentPage={currentPage} />
        
        <div className="flex flex-col">
          <FadeIn>
            <Header title="Experience" />
          </FadeIn>
          {/* Render Contents for each Experience */}
          {experienceData.map((experience, index) => (
            <ExperienceContent
              key={index}
              company={experience.company}
              title={experience.title}
              description={experience.description}
              imageUrl={experience.imageUrl}
            />
          ))}
        </div>
      </div>
    );
}
  
  export default Experience