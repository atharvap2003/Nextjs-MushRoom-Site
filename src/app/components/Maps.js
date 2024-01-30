import React from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// Motion::
import { motion, easeInOut } from "framer-motion";

// variants::
import { fadeIn } from "/variants";
import Image from "next/image";

const Maps = () => {
  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: 21.7679,
    lng: 78.8718,
  };
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
    >
      <Image width={735} height={385} src='/images/map.png'/>
    </motion.div>
  );
};

export default Maps;
