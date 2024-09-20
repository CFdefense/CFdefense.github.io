import React from "react";
import { Reveal } from "../animations/reveal";

const ExperienceContent = ({ company, title, description, imageUrl }) => {
  return (
    <div className="w-full mx-auto bg-transparent border-transparent py-16 px-4 flex flex-col gap-6 border rounded max-w-[1800px]">
      {/* Flex container for all information */}
      <div className="flex flex-col md:flex-row gap-6 text-white">
        {/* Left Side: Experience Information */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Experience Company */}
          {company && (
            <div className="text-center mb-4">
              <Reveal>
                <h2 className="text-4xl font-bold">{company}</h2>
              </Reveal>
            </div>
          )}
          {/* Experience Title */}
          {title && (
            <div className="text-center mb-4">
              <Reveal>
                <h3 className="text-1xl italic font-bold">{title}</h3>
              </Reveal>
              </div>
          )}

          {/* Experience Description */}
          {description && (
            <Reveal>
              <p className="text-lg">{description}</p>
            </Reveal>
          )}
        </div>

        {/* Right Side: Experience Picture */}
        {imageUrl && (
          <div className="flex-1 flex items-center justify-center">
            <Reveal>
              <img
                src={imageUrl}
                alt="Experience"
                className="w-full h-auto object-cover rounded"
              />
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceContent;
