import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import Goal from "./Goals/Goal";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div className="text-center">
      <Banner />

      <Goal />

      <Service />

      <Appointment />
    </div>
  );
};

export default Home;
