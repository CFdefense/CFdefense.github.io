import React, { useState, useRef, useEffect } from "react";
import { FadeIn } from "../animations/fadeIn";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef(null);

  const handleToggleResume = () => {
    if (showResume) {
      // Scroll to the top when hiding the resume
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShowResume((prev) => !prev); // Toggle the visibility
  };

  // Effect to scroll into view when the resume is shown
  useEffect(() => {
    if (showResume && resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResume]); // Only run when showResume changes

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
          <FadeIn delay={0.50}>
          <div className="text-center mb-4">
            <a
              href="../../media/about/resume.jpg"
              download="My_Resume.jpg" // This will be the name of the downloaded file
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Download Resume
            </a>
          </div>
          </FadeIn>
          {/* Display the JPEG image of the resume */}
          <FadeIn delay={0.75}>
          <img
            src="../../media/about/resume.jpg"
            alt="My Resume"
            className="mx-auto w-full max-w-[800px] rounded mb-4" // Add margin below the image
          />
          </FadeIn>
        </div>
      )}
    </div>
  );
};

export default Resume;
