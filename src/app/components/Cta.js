"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPhone, FaEnvelope } from "react-icons/fa6";

// motion::
import { motion } from "framer-motion";

// variants::
import { fadeIn } from "/variants";

import Link from "next/link";

import Image from "next/image";
import Maps from "./Maps";
import { set } from "date-fns";

export default function Cta() {
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value; //this is for to change the content in the input field!!
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const notify = () => toast("Data Submitted");

  // connect with firebase
  const submitContactData = async (event) => {
    event.preventDefault();
    const { firstName, email, phone, message } = userData;
    if (firstName && email && phone && message) {
      const res = await fetch(
        "https://hillarious-mushroom-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, email, phone, message }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Data Stored Successfully!!");
      } else {
        alert("Please store the Data");
      }
    } else {
      alert("Please store the Data");
    }
  };

  return (
    <section
      className="  pt-24 xl:pt-24 flex items-end pb-0 bg-[#b2b7c2]/10 overflow-hidden "
      id="contact"
    >
      <div className="mt-6 mb-6 container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className=""
              >
                <form>
                  <h3 className="h3"> Fill free reach: </h3>
                  <div class="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      onChange={postUserData}
                      value={userData.firstName}
                      name="firstName"
                      required
                      class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      onChange={postUserData}
                      value={userData.email}
                      name="email"
                      required
                      class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="phone"
                      placeholder="Your Phone"
                      name="phone"
                      onChange={postUserData}
                      value={userData.phone}
                      required
                      class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                  </div>
                  <div class="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      name="message"
                      required
                      onChange={postUserData}
                      value={userData.message}
                      class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                      onClick={submitContactData}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col flex-1 order-1 justify-center md:order-none h-70vh"
          >
            <Maps />
            <Link
              href="https://www.google.com/maps/place/17%C2%B055'49.7%22N+74%C2%B037'43.5%22E/@17.930459,74.628745,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.930459!4d74.628745?entry=ttu"
              className="text-left mt-[8px] flex flex-col"
            >
              {/* <strong>Address:</strong> Kurvali bk tal phaltan dist satara pincode 415523, */}
              {/* <br/> Kurvali Bk., Maharashtra 415523{" "} */}
            </Link>
            {/* phone &Email */}
            <div className="flex flex-col gap-y-1 font-semibold">
              {/* phone */}
              <div className="flex mt-[8px] gap-x-[15px]">
                {/* <FaPhone className="mt-1" /> */}
                {/* <div className="font-medium">(+91)77768 65280,<br/>(+91)70283 94172</div> */}
              </div>
              {/* email */}
              <div className="flex items-center mt-[8px] gap-x-[15px]">
                {/* <FaEnvelope /> */}
                {/* <div className="font-medium">hillriseagrovision.com</div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
