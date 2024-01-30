"use client";

import Image from "next/image";

import { FaPhone, FaEnvelope,FaInstagram, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";

// Motion::
import { motion, easeInOut } from "framer-motion";

// variants::
import { fadeIn } from "/variants";

import { Link } from "react-scroll";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14 ">
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/hillrise-logo.jpg"} width={160} height={200} alt="Image" />
            </Link>
            {/* text */}
            <div className="text-secondary ">
              Quality Product for healthy future
            </div>
            {/* phone &Email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              <div >MD & CEO:<br/> Subham Suryaji Gawade </div>
              {/* phone */}
              <div className="flex gap-x-[10px]">
                <FaPhone className="mt-1" />
                <div className="font-medium">(+91)77768 65280,<br/>(+91)70283 94172</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">hillriseagrovision@gmail.com</div>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-1 flex-col xl:items-center ">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className=" flex flex-1 flex-col ">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mod-Fri:</div>
                <div className="font-semibold">09:00AM to 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">09:00AM to 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">closed</div>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-1 flex-col xl:items-center ">
            <div>
              <h3 className="h3 font-bold mb-8">Follow Us</h3>
              <ul className="flex flex-wrap gap-y-4 font-semibold">
                <li className="text-2xl mr-2">
                  <a href="https://www.instagram.com/hillrise_mushrooms_farm/" ><FaInstagram/></a>
                </li>
                <li className="text-2xl mr-2">
                  <a href="https://www.facebook.com/people/Hillrise-mushrooms-farm/100090010670075/?mibextid=ZbWKwL" ><FaFacebookF/></a>
                </li>
                <li className="text-2xl mr-2">
                  <a href="https://www.instagram.com/shubham_s_gawade/"><FaInstagram/></a>
                </li>
              </ul>
            </div>
          </div>
          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8 ">Newsletter</h3>
            <div className="mb-9 text-secondary">Subscribe to our newsletter </div>
            <form className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Your email"
                className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm btn-accent w-24"> Submit </button>
            </form>
          </div>
        </div>
      </div>
      <Copyright/>
    </footer>
  );
}
