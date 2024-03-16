import Navbar from "@/components/navbar";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCartShopping, FaCirclePlus } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { MdPlace } from "react-icons/md";

function Page() {
  return (
    <div>
      <Navbar />
      <div className="mt-4 flex items-center justify-center space-x-2">
        <FaCirclePlus size={32} className="text-secondary" />
        <h3 className=" text-[1.5rem] font-bold">Add your own</h3>
      </div>
      <div className=" mt-8 flex flex-wrap justify-center gap-4 lg:mx-auto lg:mt-8 lg:max-w-5xl">
        <div className="group max-w-fit space-y-4 rounded border border-primary px-8 py-4 hover:bg-primary hover:text-white">
          <div className="flex items-center space-x-2">
            <IoIosPeople
              size={48}
              className="text-primary group-hover:text-white"
            />
            <h3 className=" text-[1.5rem] font-bold">People</h3>
          </div>
          <p className="lg:w-[45ch]">
            An Individual or Organization. Teacher, Coach, Professional or
            Online Seller. Company, Business or Association.
          </p>
        </div>
        <div className="group max-w-fit space-y-4 rounded border border-green-900 px-8 py-4 hover:bg-green-900 hover:text-white">
          <div className="flex items-center space-x-2">
            <MdPlace
              size={48}
              className="text-green-900 group-hover:text-white"
            />
            <h3 className="text-[1.5rem] font-bold">Place</h3>
          </div>
          <p className="lg:w-[45ch]">
            An Address. Classroom, Shop, Performance or Event Venue, Sports
            Arena, Play Area, Studio, School or Campus.
          </p>
        </div>
        <div className="group max-w-fit space-y-4 rounded border border-red-700 px-8 py-4 hover:bg-red-700 hover:text-white">
          <div className="flex items-center space-x-2">
            <FaCartShopping
              size={48}
              className="text-red-700 group-hover:text-white"
            />
            <h3 className="text-[1.5rem] font-bold">Product</h3>
          </div>
          <p className="lg:w-[45ch]">
            An Item that you can Book, Buy or Rent. Appointment, Ticket, or
            Voucher. Equipment, Instrument or Activity Kit.
          </p>
        </div>
        <div className="group max-w-fit space-y-4 rounded border border-secondary px-8 py-4 hover:bg-secondary hover:text-white">
          <div className="flex items-center space-x-2">
            <FaCalendarCheck
              size={48}
              className="text-secondary group-hover:text-white"
            />
            <h3 className="text-[1.5rem] font-bold">Program</h3>
          </div>
          <p className="lg:w-[45ch]">
            An Event with Venue and Date. Meetup, Workshop or Webinar.
            Exhibition, Performance or Competition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
