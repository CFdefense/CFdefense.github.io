import React from "react";
import { Reveal } from "../animations/reveal";

const ProjectContents = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full mx-auto bg-transparent border-transparent py-16 px-4 flex flex-col gap-6 border rounded max-w-[1800px]">
      {/* Flex container for paragraph and picture */}
      <div className="flex flex-col md:flex-row gap-6 text-white">
        {/* Left Side: Project Information */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Project Title */}
          {title && (
            <div className="text-center mb-4">
              <Reveal>
                <h2 className="text-7xl font-bold">{title}</h2>
              </Reveal>
            </div>
          )}

          {/* Project Description */}
          {description && (
            <Reveal>
              <p className="text-3xl">{description}</p>
            </Reveal>
          )}
        </div>

        {/* Right Side: Project Picture */}
        {imageUrl && (
          <div className="flex-1 flex items-center justify-center">
            <Reveal>
              <img
                src={imageUrl}
                alt="Project"
                className="object-cover object-scale-down rounded w-[500px] h-[500px]"
              />
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectContents;
