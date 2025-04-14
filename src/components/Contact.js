import React from "react"

import EmailIcon from "../assets/email-icon.svg"
import LinkedInLogo from "../assets/linkedin.svg"
import InstagramLogo from "../assets/instagram.svg"
import GithubLogo from "../assets/github.svg"
import MediumLogo from "../assets/medium.svg"

export const Contact = () => {
  return (
    <div
      className="w-full bg-[#191919] px-[30px] pb-[100px] pt-[83px] mt-[100px]"
      id="contact-section"
    >
      <div className="max-w-[650px] mx-auto">
        <h2 className="text-[#FFFFFF] text-[23px] font-[700] font-Poppins mb-[34px] mt-[12px] text-left">
          Contact
        </h2>
        <p className="text-[#C5C5C5] text-[14px] font-[400] font-Poppins mb-[24px] text-left">
          I'm a software engineer with 5+ years of experience, focused on
          crafting bold, responsive, and intuitive user interfaces. I specialize
          in frontend development with React and lean into scalable, serverless
          architecture to build modern web experiences that look great and
          perform even better. Whether it's designing pixel-perfect UIs or
          simplifying complex flows, I love turning ideas into clean, useful
          software.
        </p>
        <p className="text-[#C5C5C5] text-[14px] font-[400] font-Poppins mb-[56px] text-left">
          I believe the best software balances function and delight—built with
          care, empathy, and just enough weirdness to stand out.
        </p>
        <a className="flex mb-[64px]" href="mailto: jameson13b@icloud.com">
          <img alt="email logo" src={EmailIcon} />
          <p className="text-[#C5C5C5] text-[14px] font-[600] font-Poppins ml-[6px]">
            jameson13b@icloud.com
          </p>
        </a>
        <div className="text-white flex mb-[64px]">
          <button
            onClick={() =>
              window.open("https://linkedin.com/in/jameson-brown", "_blank")
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
              window.open("https://github.com/Jameson13B", "_blank")
            }
          >
            <img alt="github" className="h-[20px] mr-[24px]" src={GithubLogo} />
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/jam3sonb", "_blank")
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
              window.open("https://medium.com/@jamesonbrown", "_blank")
            }
          >
            <img alt="medium" className="h-[20px]" src={MediumLogo} />
          </button>
        </div>
      </div>
    </div>
  )
}
