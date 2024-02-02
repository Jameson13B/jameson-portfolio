import React from 'react'

import { Exp } from './Exp'

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
          descriptionOne="Build websites and software solutions for clients to widen their reach or simplify internal processes. Most clients are in the restaurant, bar, and other hospitality industries. I enjoy helping business owners realize software solutions and process automation doesn't have to be expensive or only for larger companies."
        />
      </div>
    </div>
  )
}
