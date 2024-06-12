import React from "react"

import { Project } from "./Project"

export const Projects = () => {
  return (
    <div className="pt-[100px] p-[30px]" id="projects-section">
      <h2 className="bg-gradient-to-t from-[#D5491D] to-[#FF8660] inline-block text-transparent bg-clip-text text-[35px] font-[800] uppercase mb-[27px] max-w-[650px] mx-auto font-Poppins">
        Projects
      </h2>
      <div className="flex flex-col sm:flex-row max-w-[650px] mx-auto flex-wrap">
        <Project
          title="Gilluly Planner"
          github="https://github.com/Jameson13B/gilluly"
          url="https://gilluly.jamesonb.com"
          containerStyles="sm:mr-[30px]"
        />
        <Project
          title="Designer Portfolio"
          github="https://github.com/Christopher-Brown1/portfolio"
          url="https://barelyfiction.design"
          containerStyles="mt-[30px] sm:mt-0"
        />
        <Project
          title="Vault Dice Game"
          github="https://github.com/Jameson13B/vault.io"
          url="https://vault.jamesonb.com/"
          containerStyles="mt-[30px] sm:mr-[30px]"
        />
        <Project
          title="Build Redux - Article"
          url="https://medium.com/@jamesonbrown/build-a-simple-redux-from-scratch-63908db092b9"
          containerStyles="mt-[30px]"
        />
        <Project
          title="MARP Cheatsheet - Article"
          url="https://medium.com/@jamesonbrown/how-developers-create-slide-decks-ef9013aab420"
          containerStyles="mt-[30px] sm:mr-[30px]"
        />
        <Project
          title="Stripe API - Article"
          url="https://hackernoon.com/stripe-api-reactjs-and-express-bc446bf08301"
          containerStyles="mt-[30px]"
        />
      </div>
    </div>
  )
}
