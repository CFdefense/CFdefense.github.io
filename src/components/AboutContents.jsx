import React from "react";
import { FadeIn } from "../animations/fadeIn";
import SkillsSection from "./Skills";

const AboutContents = () => {
  return (
    <div className="w-full mx-auto bg-transparent border-transparent py-16 px-4 flex flex-col gap-6 border rounded max-w-[1800px]">
      {/* Flex container for paragraph and picture */}
      <div className="flex flex-col md:flex-row gap-6 text-white">
        {/* Left Side: Profile Information */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Project Picture */}
          <div className="text-center mb-4">
            <FadeIn>
              <img
                src="../../media/about/profpic.jpeg"
                alt="Profile Picture"
                className="rounded-full object-cover w-3/6 max-w-[600px] mx-auto"
              />
            </FadeIn>
          </div>

          {/* My Profile Description */}
          <FadeIn>
            <p className="text-3xl text-center">My Description.</p>
          </FadeIn>
        </div>

        {/* Right Side: Skills Section */}
        <div className="flex-1 flex items-center justify-center">
            <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutContents;
