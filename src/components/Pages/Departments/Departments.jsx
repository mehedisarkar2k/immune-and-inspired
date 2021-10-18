import React from "react";
import useServiceData from "../../../hooks/useServiceData";
import Department from "./Department/Department";

const Departments = () => {
  const [services] = useServiceData();
  console.log("From service", services);

  return (
    <div className="container mx-auto py-20">
      <div className="flex items-center justify-center space-x-2">
        <span className="h-1 bg-green-400 w-14"></span>
        <h4 className="text-green-600 text-lg">
          World Class Service Departments
        </h4>
        <span className="h-1 bg-green-400 w-14"></span>
      </div>

      <h2 className="text-4xl text-center my-2 text-gray-700">
        We Believe The Heart Of Healthcare Is Service To Others
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {services.map((service) => (
          <Department key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
