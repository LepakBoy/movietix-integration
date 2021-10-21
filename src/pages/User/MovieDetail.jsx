import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MovieDetailHeader from "../../components/MovieDetail/header";
import MovieDetailSchedule from "../../components/MovieDetail/schedule";

class MovieDetailPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <MovieDetailHeader />
        <MovieDetailSchedule />
        <Footer />
      </>
    );
  }
}

export default MovieDetailPage;
