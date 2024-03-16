"use client";

import Navbar from "@/components/navbar";
import SignIn from "@/components/signin";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaPinterest,
  FaRegCopyright,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaCirclePlus, FaX } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { MdPeople, MdPlace } from "react-icons/md";

function Page() {
  const [modal, toggleModal] = useState(false);
  console.log(modal);

  return (
    <main>
      {modal ? (
        <div className="">
          <div className="flex items-center justify-between px-4">
            <Image src="/logo_shrink.png" alt="" width={100} height={100} />
            <FaX size={48} onClick={() => toggleModal(false)} />
          </div>
          <div className="mx-10">
            <SignIn />
          </div>
        </div>
      ) : (
        <>
          <Navbar toggleModal={toggleModal} />
          {/* hero section */}
          <div className="bg-[#F7F5F9] px-4 lg:h-[calc(100vh-50px)] lg:px-0">
            <div className="mx-auto  grid h-full  max-w-7xl grid-cols-4  items-center pt-10 lg:grid-cols-12 ">
              <section className=" col-span-4 pl-4 lg:col-span-8 ">
                <h1 className="text-[2rem] text-lg font-bold ">
                  Explore your{" "}
                  <span className="pr-2 italic text-secondary">hobby</span>
                  or
                  <span className="pl-2 italic text-primary">passion</span>
                </h1>
                <p className="mt-4  leading-6 md:w-[75ch]">
                  Sign-in to interact with a community of fellow hobbyists and
                  an eco-system of experts, teachers, suppliers, classes,
                  workshops, and places to practice, participate or perform.
                  Your hobby may be about visual or performing arts, sports,
                  games, gardening, model making, cooking, indoor or outdoor
                  activities…
                </p>
                <p className="w-[35ch mt-4 leading-6 md:w-[75ch]">
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </p>
                <div className="mt-14 hidden max-w-2xl lg:flex">
                  <Image
                    src="/leftpng.png"
                    alt="left"
                    height={400}
                    width={400}
                  />
                  <Image
                    src="/rightpng.png"
                    alt="right"
                    height={400}
                    width={400}
                  />
                </div>
              </section>
              <SignIn />

              <div className="col-span-4 mt-8 flex justify-center   lg:hidden">
                <Image
                  className="w-64"
                  src="/leftpng.png"
                  alt="left"
                  height={400}
                  width={100}
                />
                <Image
                  src="/rightpng.png"
                  className="w-64"
                  alt="right"
                  height={400}
                  width={100}
                />
              </div>
            </div>
          </div>
          {/* end of hero section */}

          {/* cards */}
          <div className=" mt-8 flex flex-wrap justify-center gap-4 lg:mx-auto lg:mt-8 lg:max-w-5xl">
            <div className="max-w-fit space-y-4 rounded border px-8 py-4">
              <div className="flex items-center space-x-2">
                <IoIosPeople size={48} className="text-primary" />
                <h3 className=" text-[1.5rem] font-bold">People</h3>
              </div>
              <p className="lg:w-[45ch]">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className="rounded border border-primary px-4 py-2 ">
                Connect
              </button>
            </div>
            <div className="max-w-fit space-y-4 rounded border px-8 py-4">
              <div className="flex items-center space-x-2">
                <MdPlace size={48} className="text-green-900" />
                <h3 className="text-[1.5rem] font-bold">Place</h3>
              </div>
              <p className="lg:w-[45ch]">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className="rounded border border-primary px-6 py-2 ">
                Meet up
              </button>
            </div>
            <div className="max-w-fit space-y-4 rounded border px-8 py-4">
              <div className="flex items-center space-x-2">
                <IoBag size={48} className="text-red-700" />
                <h3 className="text-[1.5rem] font-bold">Product</h3>
              </div>
              <p className="lg:w-[45ch]">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className="rounded border border-primary px-6 py-2 ">
                Get it
              </button>
            </div>
            <div className="max-w-fit space-y-4 rounded border px-8 py-4">
              <div className="flex items-center space-x-2">
                <FaCalendarCheck size={48} className="text-blue-500" />
                <h3 className="text-[1.5rem] font-bold">Program</h3>
              </div>
              <p className="lg:w-[45ch]">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className="rounded border border-primary px-6 py-2 ">
                Attend
              </button>
            </div>
          </div>
          {/* end of cards */}

          {/* add own */}
          <div className="mx-auto mt-6 max-w-5xl bg-[#F7FDFF]  p-5">
            <div className="mx-auto max-w-fit space-y-4 rounded border bg-white px-8 py-4">
              <div className="flex items-center space-x-2">
                <FaCirclePlus size={32} className="text-secondary" />
                <h3 className=" text-[1.5rem] font-bold">Add your own</h3>
              </div>
              <p className="w-[35ch] lg:w-[85ch]">
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page
              </p>
              <button className="rounded border border-primary px-4 py-2 ">
                Add new
              </button>
            </div>
          </div>

          {/* quote */}
          <div className="mx-auto mt-1 max-w-5xl bg-[#F7F5F9] p-4">
            <div className="mb-3 flex items-center space-x-4">
              <ImQuotesLeft
                size={48}
                className="rounded-full bg-primary p-2 text-white "
              />
              <h3 className="font-bold">Testimonials</h3>
            </div>
            <p>
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>

            <div className="mt-2 flex flex-wrap  items-center justify-center gap-4 bg-[#F7F5F9] lg:flex-nowrap lg:justify-between lg:gap-0">
              <Image
                src="/Audio Track.png"
                className="order-2 lg:order-none"
                alt=""
                height={100}
                width={500}
              />
              <Image
                src="/image.png"
                className="order-1 lg:order-none "
                alt=""
                height={100}
                width={200}
              />
            </div>
          </div>

          {/* banner */}
          <div className="mx-auto mt-8 max-w-5xl bg-[#F7FDFF] ">
            <h1 className="mb-2 text-center text-[2rem] font-bold lg:text-left">
              Your <span className="text-primary">Hobby,</span> Your
              <span className="pl-2 text-secondary">Community</span>
            </h1>
            <div className="flex justify-center lg:block ">
              <button className="mb-16 w-32  rounded bg-primary px-6 py-3 text-white">
                Get Started
              </button>
            </div>
            <div className="flex items-center justify-center">
              <Image
                className=" w-32 lg:w-64"
                src="/left banner.png"
                alt=""
                height={100}
                width={200}
              />
              <Image
                src="/right banner.png"
                className="w-32 lg:w-64"
                alt=""
                height={100}
                width={200}
              />
            </div>
          </div>

          {/* footer */}
          <footer className=" mt-10">
            <div className="pl-4 lg:flex lg:justify-center  lg:space-x-12 lg:pl-0">
              <div className="lg:flex lg:space-x-10">
                <div>
                  <h3 className="font-bold">Hobbycue</h3>
                  <p>About Us</p>
                  <p>Our Services</p>
                  <p>Work With Us</p>
                  <p>FAQ</p>
                  <p>Contact Us</p>
                </div>

                <div>
                  <h3 className="font-bold">How Do I</h3>
                  <p>Sign Up</p>
                  <p>Add a Listing</p>
                  <p>Clain listing</p>
                  <p>Post a Query</p>
                  <p>Other Queries</p>
                </div>

                <div>
                  <h3 className="font-bold">Quick Links</h3>
                  <p>Listings</p>
                  <p>Blog Posts</p>
                  <p>Shop / Store</p>
                  <p>Community</p>
                </div>
              </div>
              <div>
                <h1 className="font-bold">Social Media</h1>
                <div className="mt-2 flex space-x-8 text-gray-400">
                  <FaFacebook size={24} />
                  <FaInstagram size={24} />
                  <FaTwitter size={24} />
                  <FaPinterest size={24} />
                  <FaGooglePlus size={24} />
                  <FaYoutube size={24} />
                  <FaTelegram size={24} />
                </div>
                <p className="mt-6 font-bold">Invite</p>
                <div className=" flex  ">
                  <input
                    type="text"
                    className="w-full rounded-l border pl-2"
                    placeholder="Email ID"
                  />
                  <p className="rounded-r bg-primary px-3 py-1  text-white">
                    Invite
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-center space-x-2 bg-[#F7F5F9] py-5 ">
              <FaRegCopyright />
              <p className="font-semibold">Purple Cues Private Limited</p>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}

export default Page;
