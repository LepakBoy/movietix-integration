import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DataMovie from "../../components/ManageMovie/DataMovie";
import FormMovie from "../../components/ManageMovie/FormMovie";
import "../../assets/css/ManageMovieStyle.css";

const ManageMovie = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <div className="row pt-3"> */}
        <FormMovie />
        {/* </div> */}
        <DataMovie />
      </div>
      <Footer />
    </>
  );
};

export default ManageMovie;
