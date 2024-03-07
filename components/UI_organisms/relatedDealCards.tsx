import Image from "next/image";
import { Button } from "../UI_molecules/button";

interface CardProps {
  pictureSource: string;
  limited?: boolean;
  title: string;
  description: string;
  originalPrice: number;
  discount?: number;
}

function RelatedDealCard({
  pictureSource,
  limited,
  title,
  description,
  originalPrice,
  discount,
}: CardProps) {
  const finalPrice =
    discount && discount > 0 ? originalPrice * (discount / 100) : originalPrice;
  return (
    <div className="flex flex-col  justify-between px-8 py-4 shadow-lg">
      <div>
        <Image
          src={pictureSource}
          alt="photo"
          className="mx-auto object-cover"
          width={100}
          height={100}
        />
        {limited && (
          <p className="mx-auto mt-4 max-w-fit rounded-lg bg-gray-400 px-2 text-white ">
            Limited Time
          </p>
        )}
        <h1 className="pt-2 text-center text-[1.5rem] font-bold">{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <div className="space-x-2">
          <span className="text-[1.5rem]">${finalPrice}</span>
          {discount && (
            <span className="text-gray-400 line-through ">{originalPrice}</span>
          )}

          {discount && <span className="text-red-500">{discount}% Off</span>}
        </div>
        <Button label="View Deal" width={"full"} intent={"primary"} />
      </div>
    </div>
  );
}

export default RelatedDealCard;
