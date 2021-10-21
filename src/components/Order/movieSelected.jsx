import React, { Component } from "react";
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
            <div className="movie-selected-name">Spider-Man:Homecoming</div>
            <button className="btn-change-movie">Change movie</button>
          </div>
        </div>
      </>
    );
  }
}

export default OrderMovieSelected;
