import React from "react";
import ImageCard from "./imageCard";
import { storiesCards } from "@/data.json";

function ImageCards() {
  return (
    <div className="mx-auto w-10/12 space-y-8 lg:col-span-4  lg:w-full">
      {storiesCards.map((item, idx) => (
        <ImageCard key={idx} {...item} />
      ))}
    </div>
  );
}

export default ImageCards;
