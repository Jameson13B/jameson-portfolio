import React, { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollToTop = (selector) => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.querySelector(selector).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        96,
    })
  }

  return (
    <div className="w-full bg-[#222222] fixed">
      <div className="flex justify-between items-center max-w-[900px] mx-auto p-[30px]">
        <h1 className="text-3xl font-bold text-white font-Poppins">
          Jameson Brown
        </h1>
        <div className="flex justify-between hidden sm:flex">
          <button
            className="text-white mr-[71px] font-PlusJakarta"
            onClick={() => {
              scrollToTop('#home-section')
            }}
          >
            Home
          </button>
          <button
            className="text-white mr-[71px] font-PlusJakarta"
            onClick={() => {
              scrollToTop('#projects-section')
            }}
          >
            Projects
          </button>
          <button
            className="text-white mr-[71px] font-PlusJakarta"
            onClick={() => {
              scrollToTop('#experience-section')
            }}
          >
            Experience
          </button>
          <button
            className="text-white font-PlusJakarta"
            onClick={() => {
              scrollToTop('#contact-section')
            }}
          >
            Contact
          </button>
        </div>
        <div className="flex justify-between sm:hidden">
          <button
            className="text-white font-PlusJakarta"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>
        {isOpen && <div className="sm:hidden">Build Menu Here</div>}
      </div>
    </div>
  )
}
