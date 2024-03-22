import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
}

function ImageCard({ title, description }: CardProps) {
  return (
    <div className=" w-fit bg-white shadow-md ">
      <Image
        src="/photo.jpg"
        className="w-full rounded object-cover"
        height={200}
        width={200}
        alt=""
      />
      <div className="space-y-2 pb-8 pl-4 pt-4">
        <h3 className="text-[1.5rem] font-bold">{title}</h3>
        <p className="w-[30ch] text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
