import React from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { FaStethoscope } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import useServiceData from "../../../hooks/useServiceData";
import ContactForm from "../Contact/ContactForm";

const DetailsOfACart = () => {
  const [services] = useServiceData();
  const { id } = useParams();

  const item = services.filter((item) => item.id === id);
  const history = useHistory();

  console.log(item[0]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="px-10">
      <div className="container mx-auto text-center space-y-4 py-5 shadow-lg my-5 rounded-3xl bg-green-50">
        <div className="grid grid-cols-1 md:grid-cols-3 p-0 md:p-10 pb-0 space-x-10">
          <div className="col-span-1 md:col-span-1">
            <img
              className="rounded-xl"
              src={item[0]?.img}
              alt={item[0]?.tittle}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-green-600 text-4xl mb-4">{item[0]?.title}</h2>
            <p className="mb-6 text-gray-700 text-xl">{item[0]?.description}</p>

            <p className="px-6 text-gray-600 text-justify">
              {item[0]?.details}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button className="mt-4 flex items-center cursor-pointer justify-center bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70">
            Make an Appointment
            <FaStethoscope className="ml-2" />
          </button>

          <div>
            <button
              onClick={goBack}
              className="mt-2 px-5 py-2 rounded-full text-gray-100 bg-green-600 transition hover:bg-green-500  focus:ring focus:ring-offset-2 focus:ring-opacity-70 focus:ring-green-600"
            >
              <span className="flex items-center">
                <AiOutlineCaretLeft /> <span className="ml-2">Go Back</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-14 md:p-8 lg:p-5">
        <h4 className="text-3xl mt-5 text-green-700 text-center">
          Feel free to Contact with us
        </h4>
        <ContactForm />
      </div>
    </div>
  );
};

export default DetailsOfACart;
