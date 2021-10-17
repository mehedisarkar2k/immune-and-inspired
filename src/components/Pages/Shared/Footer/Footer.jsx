import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto bg-green-600 py-10 w-screen">
      <div className=" px-5 md:px-0 container mx-auto text-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">Logo</div>
          <div className="md:w-1/2">
            <div className="mt-4 md:mt-0 w-full text-sm flex items-center justify-between">
              <div className="quick-link-1 flex flex-col space-y-1">
                <Link to="/">About online food</Link>
                <Link to="/">Read our blog</Link>
                <Link to="/">Sign up to deliver</Link>
                <Link to="/">Add your restaurant</Link>
              </div>
              <div className="quick-link-2 flex flex-col space-y-1">
                <Link to="/">Get Help</Link>
                <Link to="/">Read FAQs</Link>
                <Link to="/">View all cities</Link>
                <Link to="/">Restaurant near me</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-800 mt-10 md:mt-20 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center text-xs">
          <div>Copyright &copy;2021 Online food</div>

          <div className="policies space-x-4">
            <Link to="/">Privacy policy</Link>
            <Link to="/">Use of terms</Link>
            <Link to="/">Pricing</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
