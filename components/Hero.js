import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import image1 from "../public/image/1.webp";
import image2 from "../public/image/2.jpeg";
import image3 from "../public/image/3.webp";
import image5 from "../public/image/5.webp";
import image6 from "../public/image/6.webp";
import image7 from "../public/image/7.webp";
import image8 from "../public/image/8.webp";

function Hero() {
  return (
    <div>
      <div className="w-screen flex flex-col justify-center items-center mt-10">
        <Image
          className="w-[200px] h-[200px] rounded-md"
          src={image1}
          w
          alt=""
        />
        <h1 className="text-2xl font-bold text-gray-500">
          Air Jordan 1 Mid SE
        </h1>
      </div>
      <div className="p-5">
        <h1 className="text-xl text-gray-700 font-semibold">
          Trending This Week
        </h1>
        <div className="flex flex-wrap gap-4">
          <div className="mt-5">
            <Image
              className="w-[100px] h-[120px] rounded-md"
              src={image2}
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-500">Air Force 1</h1>
          </div>
          <div className="mt-5">
            <Image
              className="w-[100px] h-[120px] rounded-md"
              src={image3}
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-500 object-cover">
              Nike max
            </h1>
          </div>
          <div className="mt-5">
            <Image
              className="w-[100px] h-[120px] rounded-md"
              src={image5}
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-500 object-cover">
              Jordan Stay
            </h1>
          </div>
          <div className="mt-5">
            <Image
              className="w-[100px] h-[120px] rounded-md"
              src={image6}
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-500 object-cover">
              Jordan Max
            </h1>
          </div>
          <div className="mt-5">
            <Image
              className="w-[100px] h-[120px] rounded-md"
              src={image7}
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-500 object-cover">
              Jordan
            </h1>
          </div>
          <div className="mt-5">
            <Image
              className="w-[100px] h-[120px] rounded-md"
              src={image8}
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-500 object-cover">
              Jordan
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
