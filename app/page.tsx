"use client";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function Home() {
  const [isNavOpen, toggleNav] = useState(false);
  return (
    <main>
      <Header />

      {/* nav opener */}

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

      <Cards />
    </main>
  );
}

export default Home;
