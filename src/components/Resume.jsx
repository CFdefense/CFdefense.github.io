import React, { useState, useRef, useEffect } from "react";
import { FadeIn } from "../animations/fadeIn";
import { Link } from "react-router-dom";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef(null);

  const handleToggleResume = () => {
    if (showResume) {
      // Scroll to the top when hiding the resume
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Set a timeout before toggling and scrolling down
      setTimeout(() => {
        setShowResume(true);
        resumeRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300); // Delay of 300 ms
    }
    
    // If already showing, just toggle the visibility
    if (showResume) {
      setShowResume(false); // Hide the resume
    } else {
      setShowResume((prev) => !prev); // Toggle the visibility
    }
  };

  return (
    <div className="relative w-full">
      {/* Always visible button */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 z-10">
        <button
          onClick={handleToggleResume}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showResume ? "Hide Resume" : "Show Resume"}
        </button>
      </div>

      {showResume && (
        <div ref={resumeRef} className="mt-16 px-4">
          <FadeIn delay={0.25}>
            <h2 className="text-4xl font-bold text-center text-white mb-4">My Resume</h2>
          </FadeIn>
          {/* Download button */}
          <FadeIn delay={0.375}>
            <div className="text-center mb-4">
            <a
                href="/media/about/resume.jpg"
                download="Christian_Farrell_Resume.jpg"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Download JPG
              </a>
            </div>
          </FadeIn>
          {/* Display the JPEG image of the resume */}
          <FadeIn delay={0.50}>
            <img
              src="../../media/about/resume.jpg"
              alt="My Resume"
              className="mx-auto w-full max-w-[800px] rounded mb-4"
            />
          </FadeIn>
        </div>
      )}
    </div>
  );
};

export default Resume;
