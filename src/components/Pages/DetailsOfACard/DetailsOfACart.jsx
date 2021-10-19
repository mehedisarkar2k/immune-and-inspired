import React from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { FaStethoscope } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import useServiceData from "../../../hooks/useServiceData";
import NewsLater from "../Home/NewsLater/NewsLater";

const DetailsOfACart = () => {
  const [services] = useServiceData();
  const { id } = useParams();

  const item = services.filter((item) => item.id === id);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="px-10">
      <div className="container mx-auto text-center space-y-4 py-5 shadow-lg my-5 rounded-3xl bg-green-50">
        <h2 className="text-green-600 text-4xl">{item[0]?.title}</h2>
        <p className="text-gray-600">{item[0]?.description}</p>
        <img
          className="w-1/3 mx-auto rounded-xl"
          src={item[0]?.img}
          alt={item[0]?.tittle}
        />

        <p className="px-10 text-gray-600 text-justify">
          Medicine is the science and practice of caring for a patient, managing
          the diagnosis, prognosis, prevention, treatment, palliation of their
          injury or disease, and promoting their health. Medicine encompasses a
          variety of health care practices evolved to maintain and restore
          health by the prevention and treatment of illness. Contemporary
          medicine applies biomedical sciences, biomedical research, genetics,
          and medical technology to diagnose, treat, and prevent injury and
          disease, typically through pharmaceuticals or surgery, but also
          through therapies as diverse as psychotherapy, external splints and
          traction, medical devices, biologics, and ionizing radiation, amongst
          others.
        </p>

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

      <NewsLater />
    </div>
  );
};

export default DetailsOfACart;
