"use client";

import Image from "next/image";
import React from "react";
import Input from "./input";
import { MdExplore } from "react-icons/md";
import { FaBell, FaBookmark, FaChevronDown, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { usePathname } from "next/navigation";
import { cx } from "class-variance-authority";

function Navbar({
  toggleModal,
}: {
  toggleModal?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <nav className="relative bg-white px-4 py-3 shadow ">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="flex items-center space-x-4">
          <Image
            className={cx({
              "w-12": pathname === "/home",
              "w-48": pathname === "/",
            })}
            src={pathname === "/" ? "/logo.png" : "/logo_shrink.png"}
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
            <TiThMenu
              size={24}
              className="block lg:hidden"
              onClick={() => toggleModal && toggleModal(true)}
            />
          </div>

          {pathname === "/" && (
            <button className="hidden rounded-lg border border-primary px-4 py-2 font-semibold text-primary lg:block">
              Sign In
            </button>
          )}

          {pathname === "/home" && (
            <div className="flex items-center space-x-4 ">
              <Image src="/pic.png" alt="" height={40} width={40} />
              <FaChevronDown className="text-gray-400" />
            </div>
          )}
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
