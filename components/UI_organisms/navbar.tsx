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
      {showMobileMenu ? (
        <div>
          <FaX
            className="text-white md:hidden"
            onClick={() => toggleMobileMenu(false)}
          />
          <div className="flex flex-col items-center  justify-center md:flex-row md:space-x-8  ">
            <div className="relative">
              <FaSearch className="absolute top-4 ml-1" />
              <Input
                state={"Default"}
                name="search"
                inputType="text"
                placeholder="Search for web builders in US"
              />
            </div>
            <div className="mt-4 text-center text-white md:mt-0 md:space-x-4 md:text-start">
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
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between text-white md:hidden">
            <h1>Logo</h1>{" "}
            <IoMdMenu size={32} onClick={() => toggleMobileMenu(true)} />
          </div>
          <div className=" hidden items-center  justify-center md:flex md:space-x-8  ">
            <div className="relative">
              <FaSearch className="absolute top-3 ml-1" />
              <Input
                state={"Default"}
                name="search"
                inputType="text"
                placeholder="Search for web builders"
              />
            </div>
            <div className="mt-4 text-center text-white md:mt-0 md:space-x-4 md:text-start">
              <a href="#" className="">
                Categories
              </a>
              <a href="#" className="">
                Website Builders
              </a>
              <a href="#" className="">
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
