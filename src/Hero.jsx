import React from "react"

const Hero = () => {
  return (
    <div className ="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
        {/* Name Element */}
        <h1 className="text-3xl">Christian Farrell</h1>

        {/* Quick Links */}
        <ul className="flex justify-center items-center w-full h-24 max-w-[1240px] mx-auto">
          <li className="p-4">Projects</li>
          <li className="p-4">Experiences</li>
          <li className="p-4">Skills</li>
          <li className="p-4">About Me</li>
        </ul>
        </div>
    </div>
  )
}

export default Hero
