import Navbar from "@/components/navbar";
import SignIn from "@/components/signin";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <main>
      <Navbar />
      <div className="h-[calc(100vh-50px)] bg-[#F7F5F9]">
        <div className="mx-auto grid h-full  max-w-7xl grid-cols-12 items-center pt-10 ">
          <section className="col-span-8 pl-4">
            <h1 className="text-[2rem] text-lg font-bold ">
              Explore your{" "}
              <span className="pr-2 italic text-secondary">hobby</span>
              or
              <span className="pl-2 italic text-primary">passion</span>
            </h1>
            <p className="mt-4 w-[75ch] leading-6">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className="mt-4 w-[75ch] leading-6">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <div className="mt-14 flex">
              <Image src="/leftpng.png" alt="left" height={100} width={300} />
              <Image src="/rightpng.png" alt="right" height={100} width={300} />
            </div>
          </section>
          <SignIn />
        </div>
      </div>
    </main>
  );
}

export default Page;
