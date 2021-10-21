import React, { Component } from "react";
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
        <section className="movie-detail pb-3 mb-5">
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-3 movie-detail__banner p-0 pt-3 justify-content-center">
                <img src={mv5} alt="movie 5" className="movie-detail__img" />
              </div>
              <div className="col-lg-9 movie-detail__desc p-0 ps-3">
                <div className="movie-detail__title d-block">
                  <span className="movie-detail__name d-block">Spider-Man: Homecoming</span>
                  <span className="movie-detail__genre">Adventure, Action, Sci-Fi</span>
                </div>
                <div className="movie-detail__schedule">
                  <div className="row">
                    <div className="col-md-3 p-0 pt-5 schedule">
                      <span>Release Date</span>
                      <div className="date d-block">June 28, 2021</div>
                      <div className="duration pt-4">Duration</div>
                      <div className="duration-time d-block">2 hours 13 minutes</div>
                    </div>
                    <div className="col-md-9 p-0 pt-5 casts">
                      <span>Directed by</span>
                      <div className="director d-block">Jon Watss</div>
                      <div className="duration pt-4">Casts</div>
                      <div className="duration-time d-block">
                        Tom Holland, Michael Keaton, Robert Downey Jr., ...
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-3 line" />
                <div className="movie-detail__synopsis">
                  <div className="synopsis-header">
                    <span>Synopsis</span>
                    <p className="synopsis-paragraph pt-2">
                      Thrilled by his experience with the Avengers, Peter returns home, where he
                      lives with his Aunt May, under the watchful eye of his new mentor Tony Stark,
                      Peter tries to fall back into his normal daily routine - distracted by
                      thoughts of proving himself to be more than just your friendly neighborhood
                      Spider-Man - but when the Vulture emerges as a new villain, everything that
                      Peter holds most important will be threatened.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MovieDetailHeader;
