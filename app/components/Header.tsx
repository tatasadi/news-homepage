"use client"
import React, { useState } from "react"
import logo from "@/public/images/logo.svg"
import iconMenu from "@/public/images/icon-menu.svg"
import iconMenuClose from "@/public/images/icon-menu-close.svg"
import Image from "next/image"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative flex w-full items-center justify-between lg:px-[10.31rem] lg:pt-[5.56rem]">
      <div className="ml-4 mt-7 lg:ml-0 lg:mt-0">
        <Image src={logo} alt="Logo" />
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-very-dark-blue opacity-50 md:hidden"></div>
      )}
      <nav
        className={`fixed right-0 top-0 z-20 h-full w-2/3 bg-off-white pl-6 pt-[9rem] md:relative md:ml-auto md:mr-4 md:w-auto md:pt-7 lg:mr-0 lg:mt-0 ${
          isMenuOpen ? "block" : "hidden md:block"
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg leading-6 md:flex-row">
          <li>
            <a href="#" aria-label="Home" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#" aria-label="New" className="link">
              New
            </a>
          </li>
          <li>
            <a href="#" aria-label="Popular" className="link">
              Popular
            </a>
          </li>
          <li>
            <a href="#" aria-label="Trending" className="link">
              Trending
            </a>
          </li>
          <li>
            <a href="#" aria-label="Categories" className="link">
              Categories
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`relative z-30 ml-auto mr-4 mt-7 block cursor-pointer md:hidden lg:mr-[10.31rem] lg:mt-[5.56rem] ${
          isMenuOpen ? "" : ""
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Image src={iconMenuClose} alt="Close Menu" />
        ) : (
          <Image src={iconMenu} alt="Open Menu" />
        )}
      </div>
    </header>
  )
}

export default Header
