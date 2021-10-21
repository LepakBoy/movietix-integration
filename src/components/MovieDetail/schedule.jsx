import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/MovieDetailScheduleStyle.css";
import location from "../../assets/logo/location.png";
import ebv from "../../assets/logo/ebv.png";
import hiflix from "../../assets/logo/hiflix.png";
import cineone from "../../assets/logo/cineone.png";

class MovieDetailSchedule extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="showtimes">
          <div className="container">
            <div className="showtime-header pt-5">
              <div className="showtime-header__title text-center">Showtimes and Tickets</div>
              <div className="row filter d-flex justify-content-center">
                <div className="showtime__filter d-flex pt-5 justify-content-md-evenly col-md-6">
                  <div className="picker date-picker">
                    <input type="date" className="date-picker__filter" />
                  </div>
                  <div className="dropdown picker location-picker">
                    <button
                      className="btn location-picker-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={location} alt="location" className="calendar" />
                      <span className="location-selected">Location</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="showtime-schedules py-5 my-5">
              <div className="row d-flex justify-content-evenly text-center">
                <div className="schedule-1 schedule-list p-4 mx-2">
                  <div className="header d-flex justify-content-md-between">
                    <div className="logo pe-4">
                      <img src={ebv} alt="" />
                    </div>
                    <div className="cinema-detail">
                      <div className="cinema-detail__name text-start pb-1">ebv.id</div>
                      <div className="cinema-detail__address text-start">
                        Whatever street No.12, South Purwokerto
                      </div>
                    </div>
                  </div>
                  <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                    <span>08.30am</span>
                    <span>10.30pm</span>
                    <span>12.00pm</span>
                    <span>02.00pm</span>
                    <span>04.30pm</span>
                    <span>07.00pm</span>
                    <span>08.30pm</span>
                  </div>
                  <div className="schedule-price d-flex justify-content-between pt-4">
                    <div className="price-title">Price</div>
                    <div className="price-amount">Rp. 40.000/seat</div>
                  </div>
                  <div className="booking-button pt-4">
                    <button className="btn-booking">Book now</button>
                  </div>
                </div>
                <div className="schedule-1 schedule-list p-4 mx-2">
                  <div className="header d-flex justify-content-md-between">
                    <div className="logo pe-4">
                      <img src={cineone} alt="" />
                    </div>
                    <div className="cinema-detail">
                      <div className="cinema-detail__name text-start pb-1">CineOne21</div>
                      <div className="cinema-detail__address text-start">
                        Whatever street No.12, South Purwokerto
                      </div>
                    </div>
                  </div>
                  <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                    <span>08.30am</span>
                    <span>10.30pm</span>
                    <span>12.00pm</span>
                    <span>02.00pm</span>
                    <span>04.30pm</span>
                    <span>07.00pm</span>
                    <span>08.30pm</span>
                  </div>
                  <div className="schedule-price d-flex justify-content-between pt-4">
                    <div className="price-title">Price</div>
                    <div className="price-amount">Rp. 40.000/seat</div>
                  </div>
                  <div className="booking-button pt-4">
                    <button className="btn-booking">Book now</button>
                  </div>
                </div>
                <div className="schedule-1 schedule-list p-4 mx-2">
                  <div className="header d-flex justify-content-md-between">
                    <div className="logo pe-4">
                      <img src={hiflix} alt="" />
                    </div>
                    <div className="cinema-detail">
                      <div className="cinema-detail__name text-start pb-1">hiflix</div>
                      <div className="cinema-detail__address text-start">
                        Whatever street No.12, South Purwokerto
                      </div>
                    </div>
                  </div>
                  <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                    <span>08.30am</span>
                    <span>10.30pm</span>
                    <span>12.00pm</span>
                    <span>02.00pm</span>
                    <span>04.30pm</span>
                    <span>07.00pm</span>
                    <span>08.30pm</span>
                  </div>
                  <div className="schedule-price d-flex justify-content-between pt-4">
                    <div className="price-title">Price</div>
                    <div className="price-amount">Rp. 40.000/seat</div>
                  </div>
                  <div className="booking-button pt-4">
                    <button className="btn-booking">Book now</button>
                  </div>
                </div>
                <div className="schedule-1 schedule-list p-4 mx-2">
                  <div className="header d-flex justify-content-md-between">
                    <div className="logo pe-4">
                      <img src={ebv} alt="" />
                    </div>
                    <div className="cinema-detail">
                      <div className="cinema-detail__name text-start pb-1">ebv.id</div>
                      <div className="cinema-detail__address text-start">
                        Whatever street No.12, South Purwokerto
                      </div>
                    </div>
                  </div>
                  <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                    <span>08.30am</span>
                    <span>10.30pm</span>
                    <span>12.00pm</span>
                    <span>02.00pm</span>
                    <span>04.30pm</span>
                    <span>07.00pm</span>
                    <span>08.30pm</span>
                  </div>
                  <div className="schedule-price d-flex justify-content-between pt-4">
                    <div className="price-title">Price</div>
                    <div className="price-amount">Rp. 40.000/seat</div>
                  </div>
                  <div className="booking-button pt-4">
                    <button className="btn-booking">Book now</button>
                  </div>
                </div>
                <div className="schedule-1 schedule-list p-4 mx-2">
                  <div className="header d-flex justify-content-md-between">
                    <div className="logo pe-4">
                      <img src={cineone} alt="" />
                    </div>
                    <div className="cinema-detail">
                      <div className="cinema-detail__name text-start pb-1">CineOne21</div>
                      <div className="cinema-detail__address text-start">
                        Whatever street No.12, South Purwokerto
                      </div>
                    </div>
                  </div>
                  <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                    <span>08.30am</span>
                    <span>10.30pm</span>
                    <span>12.00pm</span>
                    <span>02.00pm</span>
                    <span>04.30pm</span>
                    <span>07.00pm</span>
                    <span>08.30pm</span>
                  </div>
                  <div className="schedule-price d-flex justify-content-between pt-4">
                    <div className="price-title">Price</div>
                    <div className="price-amount">Rp. 40.000/seat</div>
                  </div>
                  <div className="booking-button pt-4">
                    <button className="btn-booking">Book now</button>
                  </div>
                </div>
                <div className="schedule-1 schedule-list p-4 mx-2">
                  <div className="header d-flex justify-content-md-between">
                    <div className="logo pe-4">
                      <img src={hiflix} alt="" />
                    </div>
                    <div className="cinema-detail">
                      <div className="cinema-detail__name text-start pb-1">hiflix</div>
                      <div className="cinema-detail__address text-start">
                        Whatever street No.12, South Purwokerto
                      </div>
                    </div>
                  </div>
                  <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                    <span>08.30am</span>
                    <span>10.30pm</span>
                    <span>12.00pm</span>
                    <span>02.00pm</span>
                    <span>04.30pm</span>
                    <span>07.00pm</span>
                    <span>08.30pm</span>
                  </div>
                  <div className="schedule-price d-flex justify-content-between pt-4">
                    <div className="price-title">Price</div>
                    <div className="price-amount">Rp. 40.000/seat</div>
                  </div>
                  <div className="booking-button pt-4">
                    <button className="btn-booking">Book now</button>
                  </div>
                </div>
              </div>
              <div className="view-more text-center pt-5 my-5">
                <span>View more</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MovieDetailSchedule;
