import React from "react";
import ImageCard from "./imageCard";
import { storiesCards } from "@/data.json";

function ImageCards() {
  return (
    <div className=" md:col-span-2 lg:col-span-4">
      {storiesCards.map((item, idx) => (
        <ImageCard key={idx} {...item} />
      ))}
    </div>
  );
}

export default ImageCards;
