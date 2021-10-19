import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import Goal from "./Goals/Goal";
import NewsLater from "./NewsLater/NewsLater";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div className="text-center">
      <Banner />

      <Goal />

      <Service />

      <Appointment />

      <NewsLater />
    </div>
  );
};

export default Home;
