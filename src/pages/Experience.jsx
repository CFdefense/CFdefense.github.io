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
    description: "During my 4-week internship at Avangrid Networks I worked as a Mobile Application Management and Virtual Desktop Infrastructure Intern. Avangrid is a leading U.S. energy company and a subsidiary of Iberdrola, one of the largest global providers of clean energy. Iberdrola focuses on renewable energy solutions like wind and solar, while Avangrid Renewables leads these efforts in the U.S. During my time there, I collaborated with an international team to develop a customized compliance profile for Microsoft Hololens in Microsoft Intune, deploying augmented reality technology to assist fieldworkers on wind turbines. I also restored VPN access for 400 critical devices, helping fieldworkers resume their operations and regain productivity. Additionally, I coordinated application testing for the migration of over 100 Citrix Cloud applications, ensuring seamless functionality post-migration, and managed mobile device compliance and proxy certification issues using Microsoft Intune.",
    imageUrl: "../../media/experience/Avangrid.png"
  },
  {
    company: "Marist College Information Technology",
    title: "Lead Telecommunications Technician",
    description: "As the Lead Student Technician for Marist College Telecommunications, I have played a key role in maintaining the college's telecommunications infrastructure since February 2024. My responsibilities include inspecting and running diagnostics for over 50 LAN rooms to ensure optimal network performance and reliability. I have resolved technical issues for students and staff, such as configuring phones with Cisco Unified Communications Manager, upgrading network hardware, and troubleshooting connectivity issues using specialized tools. Additionally, I built and configured telecommunications devices such as VoIP phones, Cisco Jabber phones, ATA routers, LAN ports, and FAX machines, ensuring seamless connectivity and strong security measures. A major accomplishment during this role was working full-time to install over 80 phones and telecommunications infrastructure in the new Dyson building, completing the project on time for faculty and student use. I also identified, trained, and mentored new technicians, equipping them with the skills necessary to manage telecommunications tasks efficiently.",
    imageUrl: "../../media/experience/marist.png"
  },
  {
    company: "Marist College School of Computer Science and Mathematics",
    title: "Programming Lab Tutor",
    description: "As a Programming Lab Tutor for the Marist College School of Computer Science, I have had the opportunity to guide students through foundational computer science and software development courses since August 2024. In this role, I work closely with students enrolled in Intro to Computer Science, Software Development I, and Discrete Mathematics, helping them grasp complex software development concepts and build critical problem-solving skills. I provide one-on-one and group support, using Python and Java to break down coding challenges, explain key programming principles, and assist students in debugging and optimizing their projects. Additionally, I help students develop a structured approach to problem-solving, empowering them to tackle more advanced topics in later courses. Through this role, I have fostered a collaborative and encouraging learning environment where students can build confidence in their technical abilities, ultimately improving their performance and deepening their understanding of computer science fundamentals.",
    imageUrl: "../../media/experience/marist.png"
  },
];

function Experience() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
      <div>
        <Background />
        <NavBar currentPage={currentPage} />
        
        <div className="flex flex-col text-center items-center justify-center">
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