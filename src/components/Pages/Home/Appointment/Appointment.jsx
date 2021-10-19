import React from "react";
import AppointmentStyle from "./Appointment.module.css";

const Appointment = () => {
  return (
    <div id="appointment" className={AppointmentStyle.primaryBg}>
      <div className="container mx-auto py-14">
        <div className="w-full md:w-1/2">
          <h2 className="text-green-600 text-4xl font-bold my-5">
            Take an Appointment
          </h2>
          <div className="space-y-2">
            <input
              className="mx-4 px-4 py-1 outline-none border-2 border-transparent focus:border-green-700 rounded-md"
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
            />{" "}
            <br />
            <input
              className="mx-4 px-4 py-1 outline-none border-2 border-transparent focus:border-green-700 rounded-md"
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
            />
            <br />
            <input
              className="mx-4 px-4 py-1 outline-none border-2 border-transparent focus:border-green-700 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <br />
            <input
              className="mx-4 px-4 py-1 outline-none border-2 border-transparent focus:border-green-700 rounded-md"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your Phone number"
            />
            <br />
            <label className="text-green-600 font-bold mr-2" htmlFor="data">
              Select date:
            </label>
            <input
              className="text-green-600"
              type="date"
              name="date"
              id="date"
            />
            <br />
            <label
              className="text-green-600 font-bold ml-4 mr-2"
              htmlFor="time"
            >
              Select date:
            </label>
            <input
              className="text-green-600"
              type="time"
              name="time"
              id="time"
            />
            <br />
            <textarea
              className="mx-4 px-4 py-1 outline-none border-2 border-transparent focus:border-green-700 rounded-md w-1/2 h-20"
              name="address"
              id="address"
              placeholder="Your full address"
            ></textarea>
            <br />
            <input
              className="mt-4 cursor-pointer bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70"
              type="submit"
              value="Make Appointment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
