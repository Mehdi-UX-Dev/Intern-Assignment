"use client";

import Image from "next/image";
import React from "react";
import StarRatingComponent from "react-star-rating-component";

interface CardProps {
  pictureSource: string;
  title: string;
  titleText: string;
  bodyTitle: string;
  bodyText: string;
  rating: number;
  review: string;
  star: number;
}

function Card({
  pictureSource,
  title,
  titleText,
  bodyTitle,
  bodyText,
  rating,
  review,
  star,
}: CardProps) {
  return (
    <div className="flex">
      <Image src={pictureSource} height={200} width={200} alt="photo" />
      <div>
        <p>
          <span className="font-bold">{title}</span>
          {titleText}
        </p>

        <p>
          <span>{bodyTitle}</span>
          {bodyText}
        </p>
      </div>

      <div className="fle ">
        <h1>{rating}</h1>
        <p>{review}</p>
        <StarRatingComponent name="star" value={star} />
      </div>
    </div>
  );
}

export default Card;
