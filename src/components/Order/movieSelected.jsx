import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

class OrderMovieSelected extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="main__movie-selected">
          <header className="movie-selected__header">Movie Selected</header>
          <div className="movie-selected__option mt-4">
            <div className="movie-selected-name"> {this.props.dataMovie[0].movie_name}</div>
            <button className="btn-change-movie">
              <Link to="/" style={{ textDecoration: "none", color: "#5f2eea" }}>
                Change movie
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default OrderMovieSelected;
