import Image from "next/image";
import React from "react";
import Input from "./input";
import { MdExplore } from "react-icons/md";
import { FaBell, FaBookmark, FaChevronDown, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  return (
    <nav className="relative bg-white px-4 py-3 shadow ">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="flex items-center space-x-4">
          <Image
            className="w-48 "
            src="/logo.png"
            alt="logo"
            width={250}
            height={150}
          />
          <Input />
        </div>
        <section className="flex items-center space-x-6 ">
          <div className="group cursor-pointer">
            <div className="hidden items-center lg:flex  ">
              <MdExplore className="text-primary" size={24} />
              <p className="pl-1 pr-2 font-bold">Explore</p>
              <FaChevronDown className="text-gray-400" />
            </div>
            <div className="absolute  top-12 hidden cursor-pointer rounded  border bg-white py-1 group-hover:block">
              <p className="border-b px-3 py-1.5">People-Community</p>
              <p className="border-b px-3 py-1.5">Places-Venues</p>
              <p className="border-b px-3 py-1.5">Program-Events</p>
              <p className="border-b px-3 py-1.5">Products-Store</p>
              <p className="px-3 py-1.5">Blog</p>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" hidden items-center lg:flex">
              <Image src="/hexagon.png" alt="logo" width={32} height={25} />
              <p className="pl-1 pr-2 font-bold">Hobbies</p>
              <FaChevronDown className="text-gray-400" />
            </div>
            <div className="absolute  top-12 hidden cursor-pointer rounded  border bg-white py-1 group-hover:block">
              <p className="border-b px-3 py-1.5">People-Community</p>
              <p className="border-b px-3 py-1.5">Places-Venues</p>
              <p className="border-b px-3 py-1.5">Program-Events</p>
              <p className="border-b px-3 py-1.5">Products-Store</p>
              <p className="px-3 py-1.5">Blog</p>
            </div>
          </div>
          <div className="flex space-x-5 text-primary">
            <FaSearch size={24} className="block lg:hidden" />
            <FaBookmark size={24} className="hidden lg:block" />
            <FaBell size={24} />
            <FaCartShopping size={24} className="hidden lg:block" />
            <TiThMenu size={24} className="block lg:hidden" />
          </div>

          <button className="hidden rounded-lg border border-primary px-4 py-2 font-semibold text-primary lg:block">
            Sign In
          </button>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
