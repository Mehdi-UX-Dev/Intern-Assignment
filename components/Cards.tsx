import Card from "./Card";
import data from "@/data.json";

function Cards() {
  return (
    <div className="">
      {data.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  );
}

export default Cards;
