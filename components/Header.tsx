"use client";
import { cx } from "class-variance-authority";
import React, { SetStateAction, useState } from "react";

function Header({
  page,
  togglePage,
}: {
  page: { forum: boolean; marketStories: boolean };
  togglePage: React.Dispatch<
    React.SetStateAction<{
      forum: boolean;
      marketStories: boolean;
    }>
  >;
}) {
  return (
    <header className="border-x- z-10 h-20 border-black md:mt-8  md:border-0 md:px-4 ">
      <div className="grid  grid-cols-2 gap-8 bg-blue-800 text-white  md:bg-white   lg:grid-cols-12">
        <h1
          className={cx(
            " w-fit py-2 text-center text-[1.5rem] md:rounded-md md:bg-red-100 md:px-4 md:font-bold md:text-red-600 lg:col-span-8",
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
            " w-fit py-2 text-center text-[1.5rem] md:rounded-md md:bg-red-100 md:px-4 md:font-bold md:text-red-600 lg:col-span-4",
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
