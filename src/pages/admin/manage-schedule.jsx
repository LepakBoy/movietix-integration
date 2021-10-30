import React from "react";
import "../../assets/css/ManageScheduleStyle.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FormSchedule from "../../components/MangeSchedule/FormSchdule";
import DataSchedule from "../../components/MangeSchedule/DataSchedule";

const ManageSchedule = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <FormSchedule />
        <DataSchedule />
      </div>
      <Footer />
    </>
  );
};

export default ManageSchedule;
