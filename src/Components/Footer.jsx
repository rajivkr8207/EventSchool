import React from "react";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twiter from "../assets/twiter.png";
import { Link } from "react-router-dom";
import glow from '../assets/glow.png'
const Footer = () => {
  return (
    <>

      <div className="bg-black w-full relative z-10">
      <img src={glow} alt="" className='absolute w-[25rem] lg:top-[-12rem] lg:left-[-9rem] left-[-12rem] top-[-15rem] z-0' />
        <div className="container mx-auto flex justify-around lg:flex-row flex-col py-8 ">
          <div className="mx-5 lg:my-0 my-5">
            <h1 className="text-4xl">Get in Touch</h1>
            
            <p className="flex bg-[#85898b] rounded-r-md">
              <input
                type="text"
                placeholder="Enter your Email"
                className="outline-none bg-[#85898b]  text-white px-2 py-1 placeholder:text-white text-lg"
              />
              <button className="font-semibold bg-[#065678]  px-5 py-2 rounded-md">
                Submit
              </button>
            </p>
            
            
          </div>
          <div className="mx-5 lg:mx-0 lg:my-0 my-5 lg:text-3xl text-2xl ">
          <p className=" text-[#EBEBEB]">
              Email: support@weland.com
            </p>
            <p className=" text-[#EBEBEB]">
              Phone: +1 (234) 567-8901
            </p>
            <p className=" text-[#EBEBEB]">
              Address: 123 Virtual Lane, Metaverse City, VR
            </p>
          </div>
        </div>

        <div className="text-center lg:text-3xl text-lg py-2 ">
          © {new Date().getFullYear()} Event school . all right reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
