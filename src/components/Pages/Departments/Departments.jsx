import React from "react";
import useServiceData from "../../../hooks/useServiceData";
import ContactForm from "../Contact/ContactForm";
import Department from "./Department/Department";
import DepartmentsStyle from "./Departments.module.css";

const Departments = () => {
  const [services] = useServiceData();

  return (
    <>
      <div
        className={`flex flex-col items-center justify-start ${DepartmentsStyle.departmentContainer}`}
      >
        <div className="flex items-center justify-center space-x-2 text-green-200 mt-5 md:mt-10 lg:mt-20">
          <span className="h-1 bg-green-500 w-14"></span>
          <h4 className="text-lg">World Class Service Departments</h4>
          <span className="h-1 bg-green-500 w-14"></span>
        </div>

        <h2 className="text-4xl text-center my-2 text-green-300 mb-4">
          We Believe The Heart Of Healthcare Is Service To Others
        </h2>
      </div>

      <div className="container mx-auto p-10 -mt-52">
        <div className="grid grid-cols-1 mx-20 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {services.map((service) => (
            <Department key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="bg-green-50">
        <div className="container mx-auto w-full py-10">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Departments;
