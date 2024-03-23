import React from "react";
import { storiesCards } from "@/services/api/data.json";
import Card from "./StoriesCard";

/**
 ** MarketStories component is the container for all the cards for Market Stories section
 *
 * @returns a Card for "Market Stories" section
 */

function MarketStoriesCards() {
  return (
    <div className="mx-auto w-10/12 space-y-8 lg:col-span-4  lg:w-full">
      {storiesCards.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  );
}

export default MarketStoriesCards;
