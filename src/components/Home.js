import React from 'react'

import avatar from '../assets/avatar.png'
import CSS from '../assets/css.svg'
import Html from '../assets/html.svg'
import Javascript from '../assets/javascript.svg'
import Node from '../assets/nodejs.svg'
import ReactLogo from '../assets/reactjs.svg'

export const Home = () => {
  return (
    <div className="bg-[#161513] p-[30px] pt-[96px]" id="home-section">
      <img
        alt="hero"
        className="mx-auto pt-[100px] pb-[42px] w-[213px] rounded-full"
        src={avatar}
      />
      <h2 className="max-w-[650px] mx-auto mb-[39px] text-white text-[55px] font-[800] font-Poppins">
        I do code and make content{' '}
        <span className="bg-gradient-to-br from-[#FF8660] from-55% to-[#9A33FF] to-75% bg-clip-text text-transparent">
          about it!
        </span>
      </h2>
      <p className="max-w-[650px] mx-auto mb-[54px] text-[#C5C5C5] font-[18px] font-Poppins">
        I am an experienced software engineer with over 5 years of professional
        experience, specializing in frontend development. My expertise lies in
        crafting attractive, responsive, and user friendly interfaces using
        React.
      </p>
      <div className="max-w-[550px] mx-auto mb-[88px]">
        <button
          className="border rounded-[50px] text-[#161513] font-[600] text-[21px] px-[29px] py-[16px] bg-white w-[calc(50%-9px)] inline-block font-Poppins"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({
              behavior: 'smooth',
              top:
                document
                  .querySelector('#contact-section')
                  .getBoundingClientRect().top -
                document.body.getBoundingClientRect().top -
                96,
            })
          }}
        >
          Get In Touch
        </button>
        <a
          className="border rounded-[50px] text-white font-[600] text-[21px] px-[29px] py-[16px] ml-[18px] w-[calc(50%-9px)] inline-block font-Poppins"
          href={`${process.env.PUBLIC_URL}/jameson_brown_resume.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>
      <div>
        <h3 className="text-[#C5C5C5] text-[20px] font-[600] font-Poppins">
          EXPERIENCE WITH
        </h3>
        <div className="flex justify-between sm:justify-center mt-[48px] flex-wrap sm:flex-nowrap">
          <img
            alt="javascript icon"
            className="sm:mr-[60px]"
            src={Javascript}
          />
          <img alt="react icon" className="sm:mr-[60px]" src={ReactLogo} />
          <img alt="html icon" className="sm:mr-[60px]" src={Html} />
          <img alt="css icon" className="sm:mr-[60px]" src={CSS} />
          <img alt="node icon" src={Node} />
        </div>
      </div>
    </div>
  )
}
