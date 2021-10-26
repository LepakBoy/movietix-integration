import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ShowingList from "../components/ShowingList";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Subscribe from "../components/Subscribe";
import UpcomingList from "../components/UpcomingList";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleMovieDetail = (data) => {
    //lempar data id dan id hanya bisa diterima oleh halaman tujuan
    this.props.history.push(`movie-detail/${data}`);
    // console.log(data);
  };

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <ShowingList data={this.state.data} handleMovieDetail={this.handleMovieDetail} />
        <UpcomingList />
        <Subscribe />
        <Footer />
      </>
    );
  }
}

export default HomePage;
