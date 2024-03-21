"use client";
import { cx } from "class-variance-authority";
import React, { useState } from "react";

function Header() {
  const [page, togglePage] = useState({ forum: true, marketStories: false });
  return (
    <header className="h-20 border-x-8 border-black">
      <div className="grid  grid-cols-2  gap-8  bg-blue-800 text-white">
        <h1
          className={cx(" py-2 text-center text-[2rem]", {
            " border-b-4 border-red-500 bg-blue-950": page.forum,
          })}
          onClick={() => togglePage({ forum: true, marketStories: false })}
        >
          Discussion Forum
        </h1>
        <h1
          className={cx(" py-2 text-center text-[2rem]", {
            " border-b-4 border-red-500 bg-blue-950": page.marketStories,
          })}
          onClick={() => togglePage({ forum: false, marketStories: true })}
        >
          Market Stories
        </h1>
      </div>
    </header>
  );
}

export default Header;
