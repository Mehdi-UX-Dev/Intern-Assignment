"use client";

import Card from "@/components/UI_organisms/dealCards";
import Header from "@/components/UI_organisms/header";
import Navbar from "@/components/UI_organisms/navbar";
import { IoDiamondOutline } from "react-icons/io5";
import mockData from "@/mockData.json";
import { CiTrophy } from "react-icons/ci";
import { IconType } from "react-icons";
import RelatedDealCard from "@/components/UI_organisms/relatedDealCards";
import { Input } from "@/components/UI_molecules/input";
import { Button } from "@/components/UI_molecules/button";
import Footer from "@/components/UI_organisms/Footer";
import { useEffect } from "react";

const iconMapping: Record<string, IconType> = {
  CiTrophy,
  IoDiamondOutline,
};

export default function Home() {
  useEffect(() => {
    alert(
      "Greetings, after checking the design of this page, kindly see my Readme.md file. I have explained what have I done in order to optimize folder structure and modulartiy throughout my code in there. Thank you for your patience!",
    );
  }, []);
  const { cards, relatedDeals } = mockData;
  return (
    <main>
      <Navbar />
      <Header />
      <section className="mx-auto max-w-5xl">
        <div id="Best Deals">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              pictureSource={card.pictureSource}
              title={card.title}
              titleText={card.titleText}
              bodyTitle={card.bodyTitle}
              bodyText={card.bodyText}
              rating={parseFloat(card.rating)}
              review={card.review}
              star={parseFloat(card.star)}
              id={idx + 1}
              {...(card.superDeal && {
                superDeal: {
                  Icon: iconMapping[card.superDeal.Icon],
                  title: card.superDeal.title,
                },
              })}
              {...(card.discount && {
                discount: parseInt(card.discount),
              })}
            />
          ))}
        </div>

        <div id="Related Deals" className=" mt-8  space-y-8">
          <h1 className="text-[2rem] font-bold">
            Related Deals You Might Like:
          </h1>

          <div className="flex flex-wrap justify-center md:flex-nowrap md:space-x-8">
            {relatedDeals.map((card) => (
              <RelatedDealCard
                key={card.title}
                description={card.description}
                pictureSource={card.pictureSource}
                title={card.title}
                originalPrice={parseFloat(card.originalPrice)}
                {...(card.discount && { discount: parseInt(card.discount) })}
                {...(card.limited && { limited: card.limited })}
              />
            ))}
          </div>
        </div>

        <div className=" my-8 flex flex-wrap justify-center md:flex-nowrap ">
          <h1 className="max-w-[25ch] text-center text-[1.5rem] font-semibold md:text-left">
            Sign Up and get exclusive special deals
          </h1>
          <div className="flex max-w-64 flex-wrap items-center justify-center space-y-4 md:max-w-none md:flex-nowrap md:space-y-0">
            <Input
              placeholder="Your@email.address"
              inputType="text"
              name="sign up"
              state="lightBackground"
            />
            <Button width="full" label="Sign Up" intent="inputButton" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
