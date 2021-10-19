import React from "react";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdAttachEmail } from "react-icons/md";
import ContactImg from "./contact.png";

const Contact = () => {
  return (
    <div className="bg-green-50 py-10 md:py-20">
      <div className="container mx-auto ">
        <div className="text-center flex flex-col md:flex-row">
          <h2 className="order-2 md:order-1 md:w-1/2 w-full">
            <div className="space-y-2">
              <h2 className="text-4xl text-green-700">Get In Touch With Us</h2>
              <p className="text-gray-700 text-lg">
                The best way is to develop and follow a plan. Start with your
                goals in mind and then work backwards to develop the plan.
              </p>

              <div className="flex flex-col items-center justify-around text-left mt-5">
                <div className="w-full text-green-700 flex items-center justify-start space-x-6 p-4 shadow-lg rounded-lg">
                  <div className="bg-green-700 text-white p-6">
                    <GoLocation size="3em" />
                  </div>
                  <div className="details px-2">
                    <h3 className="text-2xl">Address</h3>
                    <p className="text-gray-600">
                      106-07, Samirunnesa Tower, Darus Salam, Mirpur, Dhaka -
                      1216
                    </p>
                  </div>
                </div>
                <div className="w-full text-green-700 flex items-center justify-start space-x-6 p-4 shadow-lg rounded-lg">
                  <div className="bg-green-700 text-white p-6">
                    <BsFillTelephonePlusFill size="3em" />
                  </div>
                  <div className="details px-2 text-left">
                    <h3 className="text-2xl">Phone</h3>
                    <p className="text-gray-600">
                      +880 1717 000000
                      <br />
                      +880 1521 000000
                    </p>
                  </div>
                </div>
                <div className="w-full text-green-700 flex items-center justify-start space-x-6 p-4 shadow-lg rounded-lg">
                  <div className="bg-green-700 text-white p-6">
                    <MdAttachEmail size="3em" />
                  </div>
                  <div className="details px-2">
                    <h3 className="text-2xl">Email</h3>
                    <p className="text-gray-600">
                      support@immune-inspired.com
                      <br />
                      letstalk@immune-inspired.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </h2>

          <div className="order-1 md:order-2 md:w-1/2 w-full">
            <img src={ContactImg} alt="" />
          </div>
        </div>

        <div className="mt-14 p-8 px-14 rounded-xl bg-white shadow-xl">
          <h2 className="text-4xl text-green-700 mb-2">
            We'd Love To Hear From You
          </h2>

          <p className="text-lg text-gray-700">
            The price is something not necessarily defined as financial. It
            could be time, effort, sacrifice, money or perhaps, something else.
          </p>

          <div className="mt-4 flex flex-col space-y-2">
            <input
              className="outline-none border-2 border-green-700 px-4 py-1 rounded-md w-1/2"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <input
              className="outline-none border-2 border-green-700 px-4 py-1 rounded-md w-1/2"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your Phone"
            />
            <input
              className="outline-none border-2 border-green-700 px-4 py-1 rounded-md w-1/2"
              type="text"
              name="subject"
              id="subject"
              placeholder="Your Subject"
            />
            <textarea
              placeholder="Your Message"
              className="outline-none border-2 border-green-700 px-4 py-1 rounded-md w-1/2"
              name="message"
              id="message"
            ></textarea>
            <button className="w-48 bg-green-700 text-white outline-none border-none rounded-full px-4 py-2 hover:bg-green-600 focus:ring focus:ring-green-700 focus:ring-offset-2">
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
