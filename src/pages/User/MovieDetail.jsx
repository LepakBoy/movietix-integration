import React, { Component } from "react";
import axios from "../../Utils/axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MovieDetailHeader from "../../components/MovieDetail/header";
import MovieDetailSchedule from "../../components/MovieDetail/schedule";

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //tangkap data id movie yang dilempar oleh halaman home: hanya bisa dilakukan oleh halaman penerimanya saja
      id_movie: props.match.params.id,
      movieById: [],
      schedule: []
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

  render() {
    // console.log("halaman detail " + this.state.id_movie);
    // console.log(this.state.movieById);
    // console.log(this.state.schedule);
    const { movieById } = this.state;
    // console.log(movieById[0]);
    return (
      <>
        <Navbar />
        <MovieDetailHeader movieById={movieById[0]} />
        <MovieDetailSchedule schedule={this.state.schedule} />
        <Footer />
      </>
    );
  }
}

export default MovieDetailPage;
