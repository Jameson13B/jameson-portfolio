import React from "react"

import GillulyScreenshot from "../assets/gilluly_screenshot.png"
import HackernoonScreenshot from "../assets/hackernoon_screenshot.png"
import HackernoonRedux from "../assets/hackernoon_redux.jpeg"
import DesignerPortfolio from "../assets/designer_portfolio.jpeg"
import LinkArrow from "../assets/link_arrow.svg"

export const Project = (props) => {
  const getProjectThumbail = () => {
    if (props.title === "Gilluly Planner") {
      return GillulyScreenshot
    } else if (props.title === "Stripe API - Article") {
      return HackernoonScreenshot
    } else if (props.title === "Build Redux - Article") {
      return HackernoonRedux
    } else if (props.title === "Designer Portfolio") {
      return DesignerPortfolio
    }
  }
  const getProjectLink = () => {
    if (props.title === "Gilluly Planner") {
      return "https://gilluly.jamesonb.com"
    } else if (props.title === "Stripe API - Article") {
      return "https://hackernoon.com/stripe-api-reactjs-and-express-bc446bf08301"
    } else if (props.title === "Build Redux - Article") {
      return "https://medium.com/@jamesonbrown/build-a-simple-redux-from-scratch-63908db092b9"
    } else if (props.title === "Designer Portfolio") {
      return "https://barelyfiction.design"
    }
  }
  const data = {
    src: getProjectThumbail(),
    link: getProjectLink(),
  }

  return (
    <div
      className={
        `rounded-[18px] bg-[#2A2A2A] cursor-pointer max-w-[390px] w-full sm:w-[calc(50%-30px)] ` +
        props.containerStyles
      }
      onClick={() => window.open(data.link, "_blank")}
    >
      <img alt="" className="max-h-[235px] mx-auto mb-auto" src={data.src} />
      <div className="flex justify-between items-center pb-[14px] pt-[12px] px-[23px]">
        <div>
          <p className="text-[#C5C5C5] text-[10px] font-[800] uppercase text-left font-Poppins">
            Click here to visit
          </p>
          <h3 className="text-[#FFFFFF] text-[19px] font-[800] text-left uppercase font-Poppins">
            {props.title}
          </h3>
        </div>
        <img alt="link arrow" src={LinkArrow} />
      </div>
    </div>
  )
}

export default Project
