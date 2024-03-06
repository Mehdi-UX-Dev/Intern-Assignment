"use client";
import Card from "@/components/UI_organisms/dealCards";
import Header from "@/components/UI_organisms/header";
import Navbar from "@/components/UI_organisms/navbar";
import { IoDiamondOutline } from "react-icons/io5";
import mockData from "@/mockData.json";
import { CiTrophy } from "react-icons/ci";
import { IconType } from "react-icons";

const iconMapping: Record<string, IconType> = {
  CiTrophy,
  IoDiamondOutline,
};

export default function Home() {
  const { cards } = mockData;
  return (
    <main>
      <Navbar />
      <Header />
      <div className="mx-auto max-w-5xl">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            pictureSource={card.pictureSource}
            title={card.title}
            titleText={card.titleText}
            bodyTitle={card.bodyTitle}
            bodyText={card.bodyText}
            rating={parseInt(card.rating)}
            review={card.review}
            star={parseInt(card.star)}
            id={idx + 1}
            {...(card.superDeal && {
              superDeal: {
                Icon: iconMapping[card.superDeal.Icon],
                title: card.superDeal.title,
              },
            })}
          />
        ))}
      </div>
    </main>
  );
}
