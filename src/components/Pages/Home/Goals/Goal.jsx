import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";
import { useHistory } from "react-router";
import Doctor1 from "./doctor.webp";
import GoalStyle from "./Goal.module.css";

const Goal = () => {
  const history = useHistory();
  const goToDepartmentPAge = () => {
    history.push("/contact-us");
  };

  return (
    <div className="bg-gray-50">
      <div className={`py-20 container mx-auto ${GoalStyle.Goal}`}>
        <div className="flex items-center justify-start">
          <span className="h-0.5 bg-green-400 w-10"></span>
          <h4 className="text-green-600 text-lg ml-2">About our Goal</h4>
        </div>

        <h2 className="text-5xl text-left text-gray-800 mt-2">
          Contributing To Society Through Healthcare.
        </h2>

        <div className="flex flex-col md:flex-row mt-12">
          <div className="left">
            <h3 className="text-xl text-gray-700 text-left mb-5">
              Let Us Do The Billing So You Can Focus On The Healing.
            </h3>
            <div className="w-full md:w-1/2 p-10 md:p-0 rounded-3xl overflow-hidden group ">
              <img
                className="transition transform group-hover:scale-110"
                src={Doctor1}
                alt="Alice Williams"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-5 mt-10 list-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-700 font-bold">
              The first thing to remember about success is that it is a process
              – nothing more, nothing less.
            </p>

            <li className="flex space-x-4 items-center">
              <GoDiffAdded className="text-green-700" />
              <p>Get the oars in the water and start rowing.</p>
            </li>

            <li className="flex space-x-4 items-center">
              <GoDiffAdded className="text-green-700" />
              <p>Introspection is the trick.</p>
            </li>

            <li className="flex space-x-4 items-center">
              <GoDiffAdded className="text-green-700" />
              <p>Most people believe that success is difficult.</p>
            </li>

            <li className="flex space-x-4 items-center">
              <GoDiffAdded className="text-green-700" />
              <p>Success is something of which we all want more.</p>
            </li>
          </div>
        </div>

        <div
          onClick={goToDepartmentPAge}
          className="flex items-center justify-center mt-5"
        >
          <button className="mt-4 flex items-center cursor-pointer justify-center bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70">
            Make an Appointment
            <FaStethoscope className="ml-2" />
          </button>
        </div>

        <p className="text-lg text-gray-600 mt-8">
          There is really no magic to it and it’s not reserved only for a select
          few people. As such, success really has nothing to do with luck,
          coincidence or fate. It really comes down to understanding the steps
          in the process and then executing on those steps.
        </p>
      </div>
    </div>
  );
};

export default Goal;
