import Image from "next/image";
import React from "react";
import {
  FaRegCommentAlt,
  FaRegEye,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa";

interface CardProps {
  title: string;
  section: string;
  time: string;
  description: string;
  likes: string;
  view: string;
  comments: string;
}

function Card({
  title,
  section,
  time,
  description,
  likes,
  view,
  comments,
}: CardProps) {
  return (
    <div className=" flex w-fit items-start justify-center bg-white px-4 py-2  shadow-lg ">
      <Image src="/avatar.png" alt="" height={50} width={100} />
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h4 className="text-[1.25rem] font-bold">{title}</h4>
            <p className="rounded-full bg-blue-900 px-2 py-1 text-white">
              {section}
            </p>
          </div>
          <p className="font-semibold text-blue-900">{time}</p>
        </div>
        <div className="pt-1">
          <p className="lg:w-[70ch]">{description}</p>
        </div>
        <div className="flex items-center justify-between pr-10 pt-3">
          <div className="flex items-center gap-2">
            <FaRegHeart />
            <p className="font-semibold">{likes}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegEye />
            <p className="font-semibold">{view}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCommentAlt />
            <p className="font-semibold">{comments} Comments</p>
          </div>
          <div className="flex items-center gap-2">
            <FaShareAlt />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
