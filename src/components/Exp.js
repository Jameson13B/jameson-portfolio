import React from 'react'

import MXLogo from '../assets/mx-logo.svg'
import Atomic10 from '../assets/atomic10.png'

export const Exp = ({ containerStyles = {}, ...props }) => {
  const getLogo = () => {
    if (props.title === 'Senior Software Engineer at MX') {
      return MXLogo
    } else {
      return Atomic10
    }
  }
  return (
    <div className={containerStyles}>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center">
          <img
            alt="Google Logo"
            className="w-[56px] mb-[10px] sm:mb-0"
            src={getLogo()}
          />
          <h3 className="text-[#FFFFFF] text-[21px] font-[700] sm:ml-[11px] font-Poppins">
            {props.title}
          </h3>
        </div>
        <p className="text-[#8491A0] text-[14px] font-[400] text-left font-Poppins">
          {props.date}
        </p>
      </div>
      <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
        {props.descriptionOne}
      </p>
      <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
        {props.descriptionTwo}
      </p>
    </div>
  )
}
