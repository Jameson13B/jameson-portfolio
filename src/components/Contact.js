import React from 'react'

import EmailIcon from '../assets/email-icon.svg'
import LinkedInLogo from '../assets/linkedin.svg'
import InstagramLogo from '../assets/instagram.svg'
import GithubLogo from '../assets/github.svg'
import MediumLogo from '../assets/medium.svg'

export const Contact = () => {
  return (
    <div
      className="w-full bg-[#191919] px-[30px] pb-[100px] pt-[83px] mt-[100px]"
      id="contact-section"
    >
      <div className="max-w-[650px] mx-auto">
        <h2 className="text-[#FFFFFF] text-[23px] font-[700] font-Poppins mb-[34px] text-left">
          Contact
        </h2>
        <p className="text-[#C5C5C5] text-[14px] font-[400] font-Poppins mb-[22px] text-left">
          Experienced software engineer with over 5 years of professional
          experience, specializing in frontend development. My expertise lies in
          crafting attractive, responsive, and user friendly interfaces using
          React and scalable serverless architecture.
        </p>
        <a className="flex mb-[43px]" href="mailto: jameson13b@icloud.com">
          <img alt="email logo" src={EmailIcon} />
          <p className="text-[#C5C5C5] text-[14px] font-[600] font-Poppins ml-[6px]">
            jameson13b@icloud.com
          </p>
        </a>
        <div className="text-white flex">
          <button
            onClick={() =>
              window.open('https://linkedin.com/in/jameson-brown', '_blank')
            }
          >
            <img
              alt="linkedin"
              className="h-[20px] mr-[24px]"
              src={LinkedInLogo}
            />
          </button>
          <button
            onClick={() =>
              window.open('https://github.com/Jameson13B', '_blank')
            }
          >
            <img alt="github" className="h-[20px] mr-[24px]" src={GithubLogo} />
          </button>
          <button
            onClick={() =>
              window.open('https://www.instagram.com/jam3sonb', '_blank')
            }
          >
            <img
              alt="instagram"
              className="h-[20px] mr-[24px]"
              src={InstagramLogo}
            />
          </button>
          <button
            onClick={() =>
              window.open('https://medium.com/@jamesonbrown', '_blank')
            }
          >
            <img alt="medium" className="h-[20px]" src={MediumLogo} />
          </button>
        </div>
      </div>
    </div>
  )
}
