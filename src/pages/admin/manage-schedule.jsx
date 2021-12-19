import React, { useState } from "react";
import "../../assets/css/ManageScheduleStyle.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FormSchedule from "../../components/MangeSchedule/FormSchdule";
import DataSchedule from "../../components/MangeSchedule/DataSchedule";

const ManageSchedule = () => {
  const [schedule, setSchedule] = useState({});

  // console.log(schedule, "parent");

  const getSelectedSchedule = (data) => {
    setSchedule(data);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <FormSchedule schedule={schedule} />
        <DataSchedule selectedSchedule={getSelectedSchedule} />
      </div>
      <Footer />
    </>
  );
};

export default ManageSchedule;
