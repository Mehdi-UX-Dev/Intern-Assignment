import React from "react";

function Footer() {
  return (
    <div className=" flex flex-wrap items-center justify-center space-y-4 bg-secondary p-10 text-white md:flex-nowrap md:space-x-8 md:space-y-0">
      <div>
        <h1 className="text-[1.5rem]">Categories</h1>
        <a href="#" className="block">
          Web Builder
        </a>
        <a className="block" href="#">
          Hosting
        </a>
        <a className="block" href="#">
          Data Center
        </a>
        <a href="#">Robotic Automation</a>
      </div>

      <div>
        <h1 className="text-[1.5rem]">Contact</h1>
        <a className="block" href="#">
          Privacy and Policy
        </a>
        <a className="block" href="#">
          Terms Of Service
        </a>
        <a className="block" href="#">
          Categories
        </a>
        <a href="#">About</a>
      </div>

      <div className="">
        <select name="Country" id="Country" className="bg-secondary">
          United States
          <option value="United States">United States</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
