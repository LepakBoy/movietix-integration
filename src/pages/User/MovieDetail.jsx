import React, { Component } from "react";
import axios from "../../Utils/axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MovieDetailHeader from "../../components/MovieDetail/header";
import MovieDetailSchedule from "../../components/MovieDetail/schedule";

const dateNow = new Date().toISOString().split("T")[0];
class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //tangkap data id movie yang dilempar oleh halaman home: hanya bisa dilakukan oleh halaman penerimanya saja
      id_movie: props.match.params.id,
      movieById: [],
      schedule: [],
      time_schedule: "",
      id_schedule: 0,
      date_booking: dateNow,
      price: 0
    };
  }

  componentDidMount() {
    this.handleMovieById();
    this.handleSchedule();
  }

  handleMovieById = () => {
    axios
      .get(`movie/${this.state.id_movie}`)
      .then((res) => {
        this.setState({
          movieById: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  handleSchedule = () => {
    axios
      .get(`schedule/all?movie_id=${this.state.id_movie}`)
      .then((res) => {
        // console.log(res);
        this.setState({
          schedule: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // functions to collect data order :
  handleDataSchedule = (time, id, price) => {
    this.setState({
      time_schedule: time,
      id_schedule: 0 + id,
      price: 0 + price
    });
  };

  handleOrder = () => {
    const { id_movie, id_schedule, time_schedule, date_booking, movieById, price } = this.state;

    this.props.history.push("/order", {
      id_movie,
      id_schedule,
      time_schedule,
      date_booking,
      movieById,
      price
    });
  };
  // ##########################################
  // KENDALA : JIKA JWT EXPIRED, MAKA TIDAK BISA GET DATA MOVIE BY ID
  // ##########################################

  render() {
    // console.log("halaman detail " + this.state.id_movie);
    // console.log(this.state.movieById);
    // console.log(this.state.schedule);
    const { movieById } = this.state;
    // console.log(movieById[0]);
    // console.log(movieById);
    // console.log(this.state.time_schedule);
    // console.log(this.state.id_schedule);
    // console.log(this.state.date_booking);
    // console.log(this.state.price);
    return (
      <>
        <Navbar />
        <MovieDetailHeader movieById={movieById[0]} />
        <MovieDetailSchedule
          schedule={this.state.schedule}
          handleSchedule={this.handleDataSchedule}
          idSchedule={this.handleIdSchedule}
          order={this.handleOrder}
        />
        <Footer />
      </>
    );
  }
}

export default MovieDetailPage;
