import Card from "./Card";
import { forumCards } from "@/services/api/data.json";

/**
 *
 ** Forum Cards is the parent container for all the "Forum Cards" Components
 *
 * @returns single Card Component for the Forum Discussion Part
 */

function ForumCards() {
  return (
    <div className=" space-y-8 md:col-span-4 md:mx-10 lg:col-span-8  lg:mx-0 ">
      {forumCards.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  );
}

export default ForumCards;
