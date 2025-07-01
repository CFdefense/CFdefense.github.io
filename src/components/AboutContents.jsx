import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { FadeIn } from "../animations/fadeIn";
import SkillsSection from "./Skills";
import Resume from "./Resume";

const AboutContents = () => {
  return (
    <div className="w-full mx-auto bg-transparent border-transparent py-16 px-4 flex flex-col gap-6 border rounded max-w-[1800px]">
      {/* Flex container for paragraph and picture */}
      <div className="flex flex-col md:flex-row gap-6 text-white">
        {/* Left Side: Profile Information */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Project Picture */}
          <div className="text-center mb-4">
            <FadeIn delay={0.60}>
              <img
                src="../../media/about/profpic.jpeg"
                alt="Profile Picture"
                className="rounded-full object-cover w-3/6 max-w-[600px] mx-auto"
              />
            </FadeIn>
          </div>

          {/* My Profile Description */}
          <FadeIn delay={0.85}>
            <p className="text-3xl text-center">
              Hi, I’m Christian Farrell, an aspiring tech professional who grew up in the small town of Woodbury, Connecticut. From a young age, 
              I've had a passion for solving tough problems and a curiosity for technology. Now, I’m pursuing an accelerated master's degree in Computer Science with a concentration in AI at Marist College. 
              This path has allowed me to deepen my understanding of advanced computing concepts while developing hands-on experience in building real-world applications. 
              My goal is to build a career in software engineering, where I can create impactful technology that improves lives.
            </p>
          </FadeIn>

          {/* Contact Me Button */}
          <FadeIn delay={.85}>
            <div className="text-center mt-6">
              <Link
                to="/contacts" // Update this path to your contact page
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Contact Me
              </Link>
            </div>
          </FadeIn>
        </div>
      
        {/* Right Side: Skills Section */}
        <div className="flex-1 flex items-center justify-center -mt-8">
            <SkillsSection />
        </div>
      </div>
      <div>
        {/* Resume Component */}
        <Resume />
      </div>
    </div>
  );
};

export default AboutContents;
