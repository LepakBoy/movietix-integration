import React, { Component } from "react";
import axios from "../../Utils/axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MovieDetailHeader from "../../components/MovieDetail/header";
import MovieDetailSchedule from "../../components/MovieDetail/schedule";
import { Modal, Button } from "react-bootstrap";

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
      price: 0,
      teater_name: "",
      show: false
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    this.handleMovieById();
    this.handleSchedule();
    // console.log(this.props);
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
  handleDataSchedule = (time, id, price, teater) => {
    this.setState({
      time_schedule: time,
      id_schedule: 0 + id,
      price: 0 + price,
      teater_name: teater
    });
  };

  handleOrder = () => {
    const { id_movie, id_schedule, time_schedule, date_booking, movieById, price, teater_name } =
      this.state;

    if (!time_schedule) {
      this.setState({ show: true });
      return;
    }

    this.props.history.push("/order", {
      id_movie,
      id_schedule,
      time_schedule,
      date_booking,
      movieById,
      price,
      teater_name
    });
  };

  handleChangeDate = (event) => {
    this.setState({
      date_booking: event.target.value
    });
  };

  // ##########################################
  // KENDALA : JIKA JWT EXPIRED, MAKA TIDAK BISA GET DATA MOVIE BY ID
  // ##########################################

  render() {
    const { movieById } = this.state;
    return (
      <>
        <Navbar />
        <MovieDetailHeader movieById={movieById[0]} />
        <MovieDetailSchedule
          schedule={this.state.schedule}
          handleSchedule={this.handleDataSchedule}
          idSchedule={this.handleIdSchedule}
          order={this.handleOrder}
          date={this.state.date_booking}
          changeDate={this.handleChangeDate}
          idMovie={this.state.id_movie}
        />
        <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Oops..cannot continue</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please select time before continue</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer />
      </>
    );
  }
}

export default MovieDetailPage;
