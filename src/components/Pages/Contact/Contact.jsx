import React from "react";
import ContactImg from "./contact.png";

const Contact = () => {
  return (
    <div className="bg-green-50 py-10 md:py-20">
      <div className="container mx-auto text-center flex flex-col md:flex-row">
        <h2 className="order-2 md:order-1 md:w-1/2 w-full">
          This is contact page
        </h2>

        <div className="order-1 md:order-2 md:w-1/2 w-full">
          <img src={ContactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
