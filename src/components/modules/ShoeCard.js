"use client";
import Image from "next/image";
import React from "react";

const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoeImage }) => {
    console.log(imageUrl)
  const handleClick = () => {
    if (bigShoeImage !== imageUrl.bigShoe) {
      changeBigShoeImage(imageUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imageUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imageUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default ShoeCard;
