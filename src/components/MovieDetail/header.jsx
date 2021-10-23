import React, { Component } from "react";
import axios from "../../Utils/axios";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/MovieDetailHeaderStyle.css";
import mv5 from "../../assets/img/mv5.jpg";

class MovieDetailHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="movie-detail pb-3 mb-5" key={this.props.movieById?.id_movie}>
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-3 movie-detail__banner p-0 pt-3 justify-content-center">
                <img
                  src={
                    this.props.movieById?.image
                      ? `http://localhost:3000/uploads/movie/${this.props.movieById?.image}`
                      : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                  }
                  alt="movie 5"
                  className="movie-detail__img"
                />
              </div>
              <div className="col-lg-9 movie-detail__desc p-0 ps-3">
                <div className="movie-detail__title d-block">
                  <span className="movie-detail__name d-block">
                    {this.props.movieById?.movie_name}
                  </span>
                  <span className="movie-detail__genre">{this.props.movieById?.category}</span>
                </div>
                <div className="movie-detail__schedule">
                  <div className="row">
                    <div className="col-md-3 p-0 pt-5 schedule">
                      <span>Release Date</span>
                      <div className="date d-block">{this.props.movieById?.releaseDate}</div>
                      <div className="duration pt-4">Duration</div>
                      <div className="duration-time d-block">{this.props.movieById?.duration}</div>
                    </div>
                    <div className="col-md-9 p-0 pt-5 casts">
                      <span>Directed by</span>
                      <div className="director d-block">{this.props.movieById?.director}</div>
                      <div className="duration pt-4">Casts</div>
                      <div className="duration-time d-block">{this.props.movieById?.cast}</div>
                    </div>
                  </div>
                </div>
                <hr className="mt-3 line" />
                <div className="movie-detail__synopsis">
                  <div className="synopsis-header">
                    <span>Synopsis</span>
                    <p className="synopsis-paragraph pt-2">{this.props.movieById?.synopsis}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* looping dengan map jika tidak menggunakan index[0] */}
        {/* {this.state.movieById.map((item) => ())} */}
      </>
    );
  }
}

export default MovieDetailHeader;
