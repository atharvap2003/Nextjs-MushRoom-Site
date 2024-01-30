"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper css
import "swiper/css";

// Motion::
import { motion, easeInOut } from "framer-motion";

// variants::
import { fadeIn } from "/variants";

import Image from "next/image";

import { FaStar, FaStarHalfAalt, FaRegStar } from "react-icons/fa";

// car data
import { mushrooms } from "../../../index";

export default function ProductSlider() {
  return (
    <div className="flex flex-wrap items-center justify-center space-y-4 mx-auto ">
      {mushrooms.map((car, index) => {
        return (
          <div key={index} className="mt-20 m-10">
            <div className="max-w-[385px] mx-auto sm:mx-0 ">
              <Image src={car.image} width={380} height={284} alt="Image" />
              <div className="flex justify-between">
                <div>
                  <div className="text-[13px] text-secondary uppercase">
                    {car.type}
                  </div>
                  <h3 className="text-lg font-bold uppercase">{car.name}</h3>
                  <h3 className="mb-10 text-accent font-semibold uppercase">
                    {car.price}
                  </h3>
                </div>
                {/* Stars */}
                <div className="flex gap-x-2 text-accent h-max ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <button className="btn btn-accent btn-lg ">See details</button>
            </div>
          </div>
        );
      })}
      </div>
  );
}
