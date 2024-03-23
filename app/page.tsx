"use client";
import ForumCards from "@/components/ForumCards";
import Header from "@/components/Header";
import ImageCards from "@/components/MarketStories";
import Navbar from "@/components/Navbar";
import { cx } from "class-variance-authority";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

/**
 ** Home Component renders the home page and its components.
 *
 ** Manages the "page" state, responsible for toggling between different content sections based on mobile view.
 *
 ** Manages the "isNavOpen" state, responsible for controlling the visibility of the side navigation bar.
 *
 ** passes toggleNav function to "Navbar" component

 * @returns the home page and all it's children 
 */

function Home() {
  const [page, togglePage] = useState({ forum: true, marketStories: false });
  const [isNavOpen, toggleNav] = useState(false);

  return (
    <main className=" lg:flex">
      {isNavOpen ? (
        <Navbar toggleNav={toggleNav} />
      ) : (
        <div
          onClick={() => toggleNav(true)}
          className="fixed top-1/3 cursor-pointer  rounded-r-2xl rounded-br-2xl bg-blue-900 py-10 text-white"
        >
          <FaChevronRight size={24} />
        </div>
      )}

      <div
        className={cx(" w-full", {
          "ml-[26%]": isNavOpen,
        })}
      >
        <Header page={page} togglePage={togglePage} />

        {/*
          //* in mobile view the content needs to rendered based on page.State condition 
          //* 2 different rendering situations based on the viewport

        */}
        <div className="lg:hidden">
          {page.forum && <ForumCards />}
          {page.marketStories && <ImageCards />}
        </div>

        <div className="mt-8 hidden  max-w-6xl overflow-auto md:grid-cols-6 lg:grid  lg:grid-cols-12  xl:mx-auto">
          <ForumCards />
          <ImageCards />
        </div>
      </div>
    </main>
  );
}

export default Home;
