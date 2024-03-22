import Card from "./Card";
import { forumCards } from "@/data.json";

function Cards() {
  return (
    <div className=" space-y-8 md:col-span-4 lg:col-span-8 lg:ml-10">
      {forumCards.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  );
}

export default Cards;
