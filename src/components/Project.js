import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

import GillulyScreenshot from "../assets/gilluly_screenshot.png"
import HackernoonScreenshot from "../assets/hackernoon_screenshot.png"
import VaultScreenshot from "../assets/vault_screenshot.jpeg"
import SlideDeckScreenshot from "../assets/slidedeck_screenshot.jpeg"
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
    } else if (props.title === "MARP Cheatsheet - Article") {
      return SlideDeckScreenshot
    } else if (props.title === "Vault Dice Game") {
      return VaultScreenshot
    }
  }

  return (
    <div
      className={
        `rounded-[18px] bg-[#2A2A2A] cursor-pointer max-w-[390px] w-full sm:w-[calc(50%-15px)] ` +
        props.containerStyles
      }
      onClick={() => window.open(props.url, "_blank")}
    >
      <img
        alt=""
        className="max-h-[235px] mx-auto mb-auto"
        src={getProjectThumbail()}
      />
      <div className="flex justify-between items-center pb-[14px] pt-[12px] px-[23px]">
        <div className="flex flex-col">
          <p className="text-[#C5C5C5] text-[10px] font-[800] uppercase text-left font-Poppins">
            Click here to visit
          </p>
          <h3 className="text-[#FFFFFF] text-[19px] font-[800] text-left uppercase font-Poppins">
            {props.title}
          </h3>
          {props.github && (
            <span>
              <button
                className="text-[#FFFFFF] text-sm flex items-center px-[6px] my-[4px] italic"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(props.github, "_blank")
                }}
              >
                <FontAwesomeIcon
                  className="h-[14px] w-[14px] mr-[4px]"
                  icon={faLink}
                />{" "}
                Github
              </button>
            </span>
          )}
        </div>
        <img alt="link arrow" src={LinkArrow} />
      </div>
    </div>
  )
}

export default Project
