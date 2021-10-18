import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import BannerStyle from "./Banner.module.css";
import Banner1 from "./banner1.png";

const Banner = () => {
  return (
    <div className={BannerStyle.Banner}>
      <div className="container mx-auto flex items-center">
        <div className="img w-1/2 h-5/6">
          <img className="w-full h-3/4 object-cover" src={Banner1} alt="" />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-3xl text-green-700">
            Superior solutions that help you to shine.
          </h2>

          <div className="w-40 flex items-center cursor-pointer justify-center space-x-2 bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70 mt-5">
            <button className="">Checkout</button>
            <IoIosAddCircleOutline size="1.5em" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
