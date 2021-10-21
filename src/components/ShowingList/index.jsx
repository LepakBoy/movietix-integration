import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/css/ShowingListStyle.css";
import mv1 from "../../assets/img/mv1.jpg";
import mv2 from "../../assets/img/mv2.jpg";
import mv3 from "../../assets/img/mv3.jpg";

class ShowingList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="showing-list">
          <div className="container">
            <header className="showing-list__header">
              <span className="showing-list__title">Now Showing</span>
              <span className="shwoing-list__all">view all</span>
            </header>
            <div className="showing-list__movie">
              <div className="showing-list__movie--banner position-relative">
                <div className="showing-list__movie--content position-relative px-4 py-4">
                  <img src={mv1} alt="movie 1" />
                </div>
              </div>
              <div className="showing-list__movie--banner">
                <img src={mv2} alt="movie 2" />
              </div>
              <div className="showing-list__movie--banner">
                <img src={mv3} alt="movie 3" />
              </div>
              <div className="showing-list__movie--banner">
                <img src={mv1} alt="movie 1" />
              </div>
              <div className="showing-list__movie--banner">
                <img src={mv2} alt="movie 2" />
              </div>
              <div className="showing-list__movie--banner">
                <img src={mv3} alt="movie 3" />
              </div>
              <div className="showing-list__movie--banner">
                <img src={mv2} alt="movie 2" />
              </div>
              <div className="showing-list__movie--banner">
                <img src={mv3} alt="movie 3" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(ShowingList);
