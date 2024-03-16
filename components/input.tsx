import React from "react";
import { FaSearch } from "react-icons/fa";

function Input() {
  return (
    <div className="hidden items-center lg:flex  ">
      <input
        type="text"
        className="h-10 rounded-l border border-gray-200 bg-gray-100 pl-3"
        placeholder="Search here..."
      />
      <div className="flex h-10 items-center rounded-r bg-primary p-4">
        <FaSearch className="inline  text-white  " size={24} />
      </div>
    </div>
  );
}

export default Input;
