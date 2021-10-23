import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ShowingList from "../components/ShowingList";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Subscribe from "../components/Subscribe";
import UpcomingList from "../components/UpcomingList";
import axios from "../Utils/axios";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      // data: []
    };
  }

  // KENDALA : MENCOBA JALANIN AXIOS DI HALAMAAN PARENT DAN LEMPAR DATA KE CHILD
  // componentDidMount() {
  //   this.getDataMovie();
  // }

  // getDataMovie = () => {
  //   axios
  //     .get("movie/all?page=1&limit=8")
  //     .then((res) => {
  //       this.setState({
  //         data: res.data.data
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

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
