import React, { useState } from "react";
import "../../assets/css/ManageScheduleStyle.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FormSchedule from "../../components/MangeSchedule/FormSchdule";
import DataSchedule from "../../components/MangeSchedule/DataSchedule";

const ManageSchedule = () => {
  const [schedule, setSchedule] = useState({});
  const [dataAllSchedule, setAllSchedule] = useState([]);

  console.log(dataAllSchedule, "parent");

  // console.log(schedule, "parent");

  const getAllSchedule = (data) => {
    setAllSchedule(data);
  };

  const getSelectedSchedule = (data) => {
    setSchedule(data);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <FormSchedule allSchedule={getAllSchedule} schedule={schedule} />
        <DataSchedule dataAllSchedule={dataAllSchedule} selectedSchedule={getSelectedSchedule} />
      </div>
      <Footer />
    </>
  );
};

export default ManageSchedule;
