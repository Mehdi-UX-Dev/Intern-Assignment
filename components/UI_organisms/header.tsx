import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import LineBreak from "../misc/linebreak";
import mockData from "@/mockData.json";
import Chip from "../UI_molecules/chip";
import { FaChevronRight } from "react-icons/fa";

function Header() {
  const { tools } = mockData;
  return (
    <section className="md:max-w-5xl mx-auto">
      <h1 className="text-[3rem] text-center md:text-left my-2">
        Best Website builders in the US
      </h1>
      <LineBreak />
      <div className="text-gray-500 my-4 md:flex  justify-between md:space-x-4 ">
        <div className="md:flex md:space-x-4 text-center">
          <div className="flex items-center md:justify-start justify-center space-x-2 ">
            <IoIosCheckmarkCircleOutline />
            <h1>Last Updated - February, 2022</h1>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 ">
            <CiCircleInfo />
            <h1>Advertising Disclosure</h1>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <label htmlFor="relevant">Top Relevant</label>
          <select name="Top Relevant" id="relevant">
            <option value="#"></option>
            <option value="Try">Try</option>
          </select>
        </div>
      </div>
      <LineBreak />
      <div className=" my-2 flex justify-center md:justify-start flex-wrap md:flex-nowrap w-10/12 md:w-full md:mx-0  mx-auto  space-x-2 space-y-2 md:space-y-0 mt-8 ">
        {tools.map((item) => (
          <Chip key={item.name} name={item.name} />
        ))}
      </div>
      <div className="flex justify-center flex-wrap  md:justify-start space-x-4 items-center text-gray-500 mt-8">
        <p>Home</p>
        <FaChevronRight />
        <p>Hosting for all</p>
        <FaChevronRight />
        <p>Hosting</p>
        <FaChevronRight />
        <p>Hosting6</p>
        <FaChevronRight />
        <p>Hosting5</p>
      </div>
    </section>
  );
}

export default Header;
