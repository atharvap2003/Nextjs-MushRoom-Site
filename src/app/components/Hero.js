"use client";

import { useContext } from "react";


// context
import { SearchContext } from "../context/search";

// Image::
import Image from "next/image";

// Motion::
import { motion, easeInOut } from "framer-motion";

// variants::
import { fadeIn } from "/variants";
import Link from "next/link";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10 ">
        {/*text $ img Wrapper  */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
             Nature's Delights <span className="text-accent">Delivered</span>{" "}
              to Your Door.
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mt-0"
            >
              Discover a new world of mushrooms with our farm-fresh selection, conveniently delivered to your doorstep, embracing nature's culinary delights
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <button className="btn-cta">
              <Link href='/product' className="text-white" >Our Products</Link>
              </button>
              <button className="btn-cta">
              <Link href='/about' className="text-white" >  Know More</Link>
              </button>
            </motion.div>
          </div>
          {/* Image Product */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[80px] min-[1680px]:right-[120px] xl:top-48"
          >
            <Image
              src={"/images/carSlider/button-mushroom.png"}
              width={700}
              height={500}
              alt="Image"
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
