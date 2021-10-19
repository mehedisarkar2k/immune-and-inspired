import React from "react";

const NewsLater = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto shadow-2xl  py-10 bg-green-50 rounded-2xl">
        <h2 className="font-bold text-4xl text-green-700 text-center mb-10">
          Subscribe to our news later
        </h2>
        <div className="w-3/5 mx-auto">
          <div className="w-full flex items-center justify-center">
            <input
              placeholder="Your Email"
              className="bg-transparent outline-none py-1 px-2 border-r-0 border-green-700 border-2"
              type="email"
              name=""
              id=""
            />
            <button className="bg-green-700 text-white text-lg py-1 px-2 tracking-wide">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
