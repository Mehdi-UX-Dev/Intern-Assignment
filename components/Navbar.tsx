import {
  FaBell,
  FaChevronDown,
  FaChevronLeft,
  FaUserCircle,
} from "react-icons/fa";
import { BsChatRightTextFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";

function Navbar({
  toggleNav,
}: {
  toggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <aside className="absolute top-0  z-20 h-screen w-2/3 bg-blue-900 text-white  md:w-1/3">
      <div
        onClick={() => toggleNav(false)}
        className="absolute -right-6 top-1/2 cursor-pointer  rounded-r-xl bg-blue-900 py-16 "
      >
        <FaChevronLeft size={40} className=" " />
      </div>
      <div className="mt-2 flex items-center border-b px-2 pb-2">
        <FaUserCircle size={48} className="mr-2" />
        <h3 className="text-[1.5rem] ">Hello User</h3>
        <FaBell size={32} className="ml-auto " />
      </div>
      <div className="mt-6 flex items-center bg-blue-950 px-4 py-3">
        <BsChatRightTextFill size={32} className="mr-2 text-white" />
        <h4 className="text-[1.25rem]">Discussion Forum</h4>
        <FaChevronDown className="ml-auto" />
      </div>

      <div className="mt-6 flex items-center px-4 ">
        <AiFillDollarCircle size={32} className="mr-2 text-white" />
        <h4 className="text-[1.25rem]">Market Stories</h4>
      </div>
      <ul className="mt-4 space-y-4 pl-14 text-[1.25rem]">
        <li>Sentiment</li>
        <li>Market</li>
        <li>Sector</li>
        <li>Watchlist</li>
        <li>Events</li>
        <li>News/Interview</li>
      </ul>
    </aside>
  );
}

export default Navbar;
