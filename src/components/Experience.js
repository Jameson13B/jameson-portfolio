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
          description="As a Senior Software Engineer at MX, I played a pivotal role in developing innovative solutions for MX's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
          containerStyles="mb-[50px]"
        />
        <Exp
          title="Owner of Atomic10 Studio"
          date="March 2023 - Present"
          description="Build websites and software solutions for clients to widen their reach or simplify internal processes. Most clients are in the restaurant, bar, and other hospitality industries. I enjoy helping business owners realize software solutions and process automation doesn't have to be expensive or only for larger companies."
        />
      </div>
    </div>
  )
}

export default Experience
