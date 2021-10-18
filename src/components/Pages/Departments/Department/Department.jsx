import React from "react";
import { useHistory } from "react-router";

const Department = ({ service }) => {
  const { id, title, img, description } = service;

  const history = useHistory();

  const goToDetailsPage = () => {
    history.push(`./service/${id}`);
  };

  return (
    <div className="h-full">
      <div className="h-full rounded-2xl overflow-hidden shadow-md text-center group">
        <img
          className="transition transform group-hover:scale-105"
          src={img}
          alt={title}
        />

        <h4 className="text-left text-2xl text-green-700 p-4 pb-2">{title}</h4>

        <div className="px-6">
          <p className="text-left text-gray-600">{description}</p>
        </div>

        <button
          onClick={goToDetailsPage}
          className="px-6 py-2 transition bg-green-700 rounded-full text-gray-100 my-4 hover:bg-green-600"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Department;
