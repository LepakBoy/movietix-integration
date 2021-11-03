import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DataMovie from "../../components/ManageMovie/DataMovie";
import FormMovie from "../../components/ManageMovie/FormMovie";
import "../../assets/css/ManageMovieStyle.css";
import { connect } from "react-redux";
import { getAllMovie } from "../../stores/action/movieAll";

const ManageMovie = (props) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    props.getAllMovie();
    return () => {};
  }, []);

  const handleIsUpdate = (stat, item) => {
    setIsUpdate(stat);
    setForm(item);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <div className="row pt-3"> */}
        <FormMovie isUpdate={isUpdate} form={form} />
        {/* </div> */}
        <DataMovie setIsUpdate={handleIsUpdate} />
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  dataMovie: state.getAllMovie
});

const mapDispatchToProps = {
  getAllMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageMovie);
