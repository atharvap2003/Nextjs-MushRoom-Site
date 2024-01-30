"use client";

import Image from "next/image";

// icons::
import { MdKey, MdHandshake, MdTrendingUp } from "react-icons/md";

// Motion::
import { motion, easeInOut } from "framer-motion";

// variants::
import { fadeIn } from "/variants";

export default function Why() {
  return (
    <section className="section flex items-center " id="why">
      <div className="container mx-auto ">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and Quality Beyond Compare
        </motion.h2>
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our commitment to customer satisfaction begins with the quality of our mushrooms. We take pride in cultivating the finest, freshest mushrooms, carefully monitoring every stage of growth to ensure excellence. When you choose our mushrooms, you're choosing nature's best.
        </motion.p>
        {/* carImage */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image src={"/images/carSlider/button-mushroom.png"} width={800} height={420} alt="Image" />
        </motion.div>
        {/* grid-items */}
        <motion.div 
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        className=" flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <MdKey className="text-[38px] text-accent mb-4"/>
            <h3 className="h3"> Farm-to-Fork Freshness</h3>
            <p className="hidden xl:flex">
            Our mushrooms are grown in pristine, controlled environments, ensuring they reach your doorstep at the peak of freshness. 
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <MdTrendingUp className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Diverse Mushroom Varieties</h3>
            <p className="hidden xl:flex">
            From delicate Oyster mushrooms to exotic Button Mushroom, we offer a diverse selection to cater to all culinary preferences.
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0 ">
            <MdHandshake className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Sustainable and Ethical Practices</h3>
            <p className="hidden xl:flex">
            We employ eco-friendly growing methods and prioritize sustainability at every turn, making us the go-to choice for conscientious consumers who want to savor mushrooms with a clean conscience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
