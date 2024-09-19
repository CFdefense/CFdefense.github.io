import React from "react";

const ProjectContents = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full mx-auto bg-transparent border-transparent py-16 px-4 flex flex-col gap-6 border rounded max-w-[1600px]">
      {/* Flex container for paragraph and picture */}
      <div className="flex flex-col md:flex-row gap-6 text-white">
        {/* Left Side: Project Information */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Project Title */}
          {title && (
            <div className="text-center mb-4">
              <h2 className="text-4xl font-bold">{title}</h2>
            </div>
          )}

          {/* Project Description */}
          {description && <p className="text-lg">{description}</p>}
        </div>

        {/* Right Side: Project Picture */}
        {imageUrl && (
          <div className="flex-1 flex items-center justify-center">
            <img
              src={imageUrl}
              alt="Project"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectContents;
