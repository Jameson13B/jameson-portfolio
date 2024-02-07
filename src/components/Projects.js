import React from "react"

import { Project } from "./Project"

export const Projects = () => {
  return (
    <div className="pt-[100px] p-[30px]" id="projects-section">
      <h2 className="bg-gradient-to-t from-[#D5491D] to-[#FF8660] inline-block text-transparent bg-clip-text text-[35px] font-[800] uppercase mb-[27px] max-w-[650px] mx-auto font-Poppins">
        Projects
      </h2>
      <div className="flex flex-col sm:flex-row max-w-[650px] mx-auto flex-wrap">
        <Project title="Gilluly Planner" containerStyles="sm:mr-[30px]" />
        <Project
          title="Build Redux - Article"
          containerStyles="mt-[30px] sm:mt-0"
        />
        <Project
          title="Stripe API - Article"
          containerStyles="mt-[30px] sm:mr-[30px]"
        />
        <Project
          title="Designer Portfolio"
          containerStyles="mt-[30px] sm:mr-[30px]"
        />
      </div>
    </div>
  )
}
