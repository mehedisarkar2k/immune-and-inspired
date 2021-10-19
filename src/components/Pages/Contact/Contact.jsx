import React from "react";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdAttachEmail } from "react-icons/md";
import NewsLater from "../Home/NewsLater/NewsLater";
import ContactImg from "./contact.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="bg-green-50 pt-10 md:pt-20">
      <div className="container mx-auto mb-5">
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

          <ContactForm />
        </div>
      </div>
      <NewsLater />
    </div>
  );
};

export default Contact;
