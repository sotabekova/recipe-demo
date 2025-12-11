import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Alfredo() {
  return (
    <div>
       <nav className="w-full bg-amber-100 shadow-md fixed top-0 left-0 z-50">
     <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
 <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>
  <div className="flex items-center gap-4 text-xl cursor-pointer md:order-2">
    <label
      htmlFor="menu-toggle"
      className="cursor-pointer text-3xl md:hidden"
    >
      ☰
    </label>

    <div className="flex items-center">
      <FontAwesomeIcon icon={faMoonSolid} />
      <span className="hidden">
        <FontAwesomeIcon icon={faMoonRegular} />
      </span>
    </div>
  </div>

  <input type="checkbox" id="menu-toggle" className="hidden peer" />

  <ul
    className="
    bg-amber-100
      absolute md:static w-full left-0 md:w-auto
      px-6 md:px-0 pt-4 md:pt-0 pb-4 md:pb-0
      shadow-md md:shadow-none

      opacity-0 top-[-300px]
      peer-checked:opacity-100 peer-checked:top-16
      transition-all duration-300

      md:flex md:opacity-100 md:top-auto
      md:order-1
    "
  >
    <li className="py-2 px-4 md:py-0  cursor-pointer">
      Home
    </li>
    <li className="py-2 px-4 md:py-0  cursor-pointer">
      About
    </li>
    <li className="py-2 px-4 md:py-0  cursor-pointer">
      Blog
    </li>
    <li className="py-2 px-4 md:py-0  cursor-pointer">
      Contact
    </li>
  </ul>
</div>

    </nav>

    
    </div>
  )
}

export default Alfredo