import React from "react"

import { Exp } from "./Exp"

export const Experience = () => {
  return (
    <div className="pt-[100px] p-[30px]" id="experience-section">
      <h2 className="bg-gradient-to-t from-[#1373D1] to-[#5BADFF] inline-block text-transparent bg-clip-text text-[35px] font-[800] uppercase mb-[27px] max-w-[650px] mx-auto font-Poppins">
        Experience
      </h2>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <Exp
          title="Senior Software Engineer at MX"
          date="June 2019 - Present"
          descriptionOne="As a Senior Software Engineer at MX, I played a pivotal role in developing MX's product analytics solution. Collaborating with a dynamic team of engineers and product analysts, I contributed to the planning, designing, and integration of a product analytics solutoins that enabled us to run AB tests and deliver better product analytics results on all new features and enhancements. Using the results, we identified numerous areas we can improve the end users experience resulting in an increase in user conversion rate by 21.8%."
          descriptionTwo="As the product I helped build grew, part of the project was to be isolated from the rest and served up as a standalone project. I planned and implemented a process to create a new repo, convert existing code over, and launch the new service. All without having any downtime for clients and end users and continuing to iterate through feature enhancements, new features, and bug fixes."
          containerStyles="mb-[50px]"
        />
        <Exp
          title="Owner of Atomic10 Studio"
          date="March 2023 - Present"
          descriptionOne="My creative lab for building both client projects and passion experiments. From custom websites and software for clients to experimental side quests like small-batch brewing and 3D-printed rockets. It's equal parts work and play, always driven by curiosity."
          descriptionTwo={
            <span>
              Atomic10 gives me the freedom to explore ideas that don't always
              fit in a typical job description. Whether I'm solving real
              problems for small businesses or chasing an oddly specific idea
              just to see if I can make it happen, it's all part of the same
              process: <strong>create, refine, repeat</strong>. It's my way of
              staying sharp, staying weird, and staying excited about what I do.
            </span>
          }
        />
      </div>
    </div>
  )
}
