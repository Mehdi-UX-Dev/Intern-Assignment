"use client";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import ImageCards from "@/components/ImageCards";
import Navbar from "@/components/Navbar";
import ImageCard from "@/components/imageCard";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function Home() {
  const [page, togglePage] = useState({ forum: true, marketStories: false });
  const [isNavOpen, toggleNav] = useState(false);

  const [isMdViewport, setIsMdViewport] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMdViewport(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    console.log("I am running");

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main>
      <Header page={page} togglePage={togglePage} />

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

      {isMdViewport && page.forum && <Cards />}
      {isMdViewport && page.marketStories && <ImageCards />}
      {!isMdViewport && (
        <div className="mt-8 grid md:grid-cols-6 lg:grid-cols-12">
          <Cards />
          <ImageCards />
        </div>
      )}
    </main>
  );
}

export default Home;
