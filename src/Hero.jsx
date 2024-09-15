import React from "react"

const Hero = () => {
  return (
    <div className ="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
        {/* Name Element -> Include Random Swapping Font*/}
        <h1 className="text-8xl">Christian Farrell</h1>

        {/* Quick Links */}
        <ul className="text-3xl flex justify-center items-center w-full h-24 max-w-[1240px] mx-auto p-5">
          <li className="p-5">Projects</li>
          <li className="p-5">Experiences</li>
          <li className="p-5">Skills</li>
          <li className="p-5">About</li>
        </ul>
        </div>
    </div>
  )
}

export default Hero
