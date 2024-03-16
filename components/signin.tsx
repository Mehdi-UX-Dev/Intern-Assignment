"use client";

import { cx } from "class-variance-authority";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";

function SignIn() {
  const [signState, toggleSignState] = useState(true);
  return (
    <div className="col-span-4">
      <div className="mb-8 flex space-x-8 text-gray-600 ">
        <button
          className={cx("text-xl font-semibold", {
            "border-b-4 border-primary pb-1 text-primary ": signState,
          })}
          onClick={() => toggleSignState(true)}
        >
          Sign In
        </button>
        <button
          className={cx("text-xl font-semibold", {
            "border-b-4 border-primary pb-1 text-primary ": !signState,
          })}
          onClick={() => toggleSignState(false)}
        >
          Join In
        </button>
      </div>
      <div className=" space-y-3">
        <div className="flex items-center rounded border border-black py-3">
          <FcGoogle className="ml-2" size={24} />
          <p className="grow text-center">Continue with Google</p>
        </div>
        <div className="flex items-center rounded border border-black py-3">
          <FaFacebook className="ml-2 text-secondary" size={24} />
          <p className="grow text-center">Continue with Facebook</p>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <div className="grow border-b-4 border-gray-400"></div>
        <p className="font-bold">Or connect With</p>
        <div className="grow border-b-4 border-gray-400"></div>
      </div>
      <div className="mt-8 flex flex-col ">
        <input
          type="text"
          placeholder="Email"
          className="mb-4 rounded border border-gray-400 bg-white py-2 pl-2"
        />

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border border-gray-400 py-2 pl-2"
          />
          <IoEyeSharp
            className="absolute right-2 top-2 text-gray-400"
            size={24}
          />
        </div>
        <p className="pt-1 text-right font-semibold text-gray-500">
          Passwrord strength
        </p>
        <p className="mt-2 space-x-1 text-gray-400">
          By continuing, you agree to our
          <span className="text-black">Terms of Service</span> and
          <span className="text-black">Privacy Policy.</span>
        </p>

        <button className="mt-4 w-full rounded bg-primary py-3 font-bold text-white">
          Agree and Continue
        </button>
      </div>
    </div>
  );
}

export default SignIn;
