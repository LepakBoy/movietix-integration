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

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <ShowingList />
        <UpcomingList />
        <Subscribe />
        <Footer />
      </>
    );
  }
}

export default HomePage;
