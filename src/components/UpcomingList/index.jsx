import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/css/UpcomingListStyle.css";
import mv4 from "../../assets/img/mv4.jpg";
import mv5 from "../../assets/img/mv5.jpg";
import mv6 from "../../assets/img/mv6.jpg";
// import "../../../node_modules/bootstrap"
import Style from "./Upcoming.module.css";

class UpcomingList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="upcoming-list">
          <div className="container">
            <header className="upcoming-list__header">
              <span className="upcoming-list__header--title">Upcoming Movie</span>
              <span className="upcoming-list__header--all">view all</span>
            </header>
            <div className="month-list">
              <div className="month-name" id="active">
                <span className="month-name__name">January</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">February</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">March</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">April</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">May</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">June</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">July</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">August</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">September</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">October</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">November</span>
              </div>
              <div className="month-name">
                <span className="month-name__name">Desember</span>
              </div>
            </div>
            <div className="upcoming-list__movie-list">
              <div className="upcoming-list__movie-card">
                <img src={mv4} alt="movie 4" />
                <div className="movie-card__name">
                  <span>Tenet</span>
                </div>
                <div className="movie-card__genre">
                  <span>Action, Adventure, Sc-Fi</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
              <div className="upcoming-list__movie-card">
                <img src={mv5} alt="movie 5" />
                <div className="movie-card__name">
                  <span>Spider-Man: Homecoming</span>
                </div>
                <div className="movie-card__genre">
                  <span>Action, Adventure, Sc-Fi</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
              <div className="upcoming-list__movie-card">
                <img src={mv6} alt="movie 6" />
                <div className="movie-card__name">
                  <span>Black Widow</span>
                </div>
                <div className="movie-card__genre">
                  <span>Action, Adventure, Sc-Fi</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
              <div className="upcoming-list__movie-card">
                <img src={mv4} alt="movie 4" />
                <div className="movie-card__name">
                  <span>Tenet</span>
                </div>
                <div className="movie-card__genre">
                  <span>Action, Adventure, Sc-Fi</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
              <div className="upcoming-list__movie-card">
                <img src={mv5} alt="movie 5" />
                <div className="movie-card__name">
                  <span>Spider-Man:Homecoming</span>
                </div>
                <div className="movie-card__genre">
                  <span>Action, Adventure, Sc-Fi</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
              <div className="upcoming-list__movie-card">
                <img src={mv6} alt="movie 6" />
                <div className="movie-card__name">
                  <span>Black Widow</span>
                </div>
                <div className="movie-card__genre">
                  <span>Action, Adventure, Sc-Fi</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
              <div className="upcoming-list__movie-card">
                <img src={mv4} alt="movie 4" />
                <div className="movie-card__name">
                  <span>Tenet</span>
                </div>
                <div className="movie-card__genre">
                  <span>Action, Adventure, Sc-Fi</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
              <div className="upcoming-list__movie-card">
                <img src={mv5} alt="movie 5" />
                <div className="movie-card__name">
                  <span>Spider-Man:Homecoming</span>
                </div>
                <div className="movie-card__genre">
                  <span>Action, Adventure, Sc-Fi</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default withRouter(UpcomingList);
