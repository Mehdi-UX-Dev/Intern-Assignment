"use client";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import ImageCards from "@/components/ImageCards";
import Navbar from "@/components/Navbar";
import { cx } from "class-variance-authority";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

/**
 ** Home Component is responsilbe for rendering the home page and it's components
 ** Responsible for the "page" state which in turn is responsible for toggling between content when the page is in mobile view
 ** Responsible for "isNavOpen" state which in turn is responsible for opening the side nav bar
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

        <div className="lg:hidden">
          {page.forum && <Cards />}
          {page.marketStories && <ImageCards />}
        </div>

        <div className="mt-8 hidden  max-w-6xl overflow-auto md:grid-cols-6 lg:grid  lg:grid-cols-12  xl:mx-auto">
          <Cards />
          <ImageCards />
        </div>
      </div>
    </main>
  );
}

export default Home;
