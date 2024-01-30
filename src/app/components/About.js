"use client";

import Image from "next/image";

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

// Motion::
import { motion, easeInOut } from "framer-motion";

// variants::
import { fadeIn } from "/variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section pt-0 flex items-center " id="about" ref={ref}>
      <div className=" mt-24 sm:mt-0 container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images/about/google-mushroom.webp"}
              width={600}
              height={448}
              alt="image"
            />
          </motion.div>
          {/* text & stats */}
          <div className="flex-1 flex items-center xl:justify-center ">
            <div className="xl:max-w-[517px]">
              
              <motion.p
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md text-justify"
              >
                <strong>Our Brand, </strong> <br/>  is a beacon of excellence in the world of mushroom cultivation. Nestled amidst picturesque hills, we specialize in premium, farm-fresh mushrooms. With a commitment to quality and sustainability, we bring nature's bounty to your table, ensuring every bite is a testament to our passion for perfection. 
              </motion.p>
              <motion.div 
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
              className="flex flex-col">
                <h2 className="h3">We Offer following Services : </h2>
                <ul className="list-disc ml-[1.5rem]">
                  <li>Mushroom delivery available all over india</li>
                  <li>Button mushroom compost available</li>
                  <li>practically training available on plant (all mushroom)</li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
