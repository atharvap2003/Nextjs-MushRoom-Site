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

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container section h-65 mx-auto"
    >
      <h1 class="mb-4 text-4xl mt-10 pt-10 text-center lg:leading-normal font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
        Mushroom Magic: Our Exquisite Fungi Collection
      </h1>
      <p class="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Step into the enchanting world of mushrooms at Hillrise Mushroom. Our
        carefully curated selection, lovingly nurtured by CEO and MD Shubham
        Suryaji Gawade, offers a symphony of flavors and textures.{" "}
      </p>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {mushrooms.map((car, index) => {
          return (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
