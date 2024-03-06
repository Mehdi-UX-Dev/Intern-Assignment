"use client";
import { FaSearch } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Input } from "../UI_molecules/input";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [showMobileMenu, toggleMobileMenu] = useState(false);

  return (
    <nav className="bg-secondary  p-4 md:h-16  md:pt-2">
      {!showMobileMenu ? (
        <div className="flex justify-between items-center text-white">
          <h1>Logo</h1>{" "}
          <IoMdMenu size={32} onClick={() => toggleMobileMenu(true)} />
        </div>
      ) : (
        <>
          <FaX
            className="text-white md:hidden"
            onClick={() => toggleMobileMenu(false)}
          />
          <div className="flex flex-col md:flex-row  items-center justify-center md:space-x-8  ">
            <div className="relative">
              <FaSearch className="absolute top-4 ml-1" />
              <Input
                state={"Default"}
                name="search"
                inputType="text"
                placeholder="Search for web builders in US"
              />
            </div>
            <div className="text-white md:space-x-4 mt-4 md:mt-0 text-center md:text-start">
              <a href="#" className="block md:inline">
                Categories
              </a>
              <a href="#" className="block md:inline">
                Website Builders
              </a>
              <a href="#" className="block md:inline">
                Today&apos;s Deals
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
