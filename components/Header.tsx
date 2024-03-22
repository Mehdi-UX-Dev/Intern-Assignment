"use client";
import { cx } from "class-variance-authority";
import React, { useState } from "react";

function Header() {
  const [page, togglePage] = useState({ forum: true, marketStories: false });
  return (
    <header className="border-x- z-10 h-20 border-black md:mt-8  md:border-0 md:px-4 ">
      <div className="grid  grid-cols-2 gap-8  bg-blue-800  text-white  md:flex md:justify-between md:bg-white">
        <h1
          className={cx(
            " py-2 text-center text-[2rem] md:rounded-md md:bg-red-100 md:px-4 md:font-bold md:text-red-600",
            {
              " border-b-4 border-red-500 bg-blue-950 md:border-0": page.forum,
            },
          )}
          onClick={() => togglePage({ forum: true, marketStories: false })}
        >
          Discussion Forum
        </h1>
        <h1
          className={cx(
            " py-2 text-center text-[2rem] md:rounded-md md:bg-red-100 md:px-4 md:font-bold md:text-red-600",
            {
              " border-b-4 border-red-500 bg-blue-950 md:border-0":
                page.marketStories,
            },
          )}
          onClick={() => togglePage({ forum: false, marketStories: true })}
        >
          Market Stories
        </h1>
      </div>
    </header>
  );
}

export default Header;
