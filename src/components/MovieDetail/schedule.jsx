import React, { Component, useState, useEffect } from "react";
import axios from "../../Utils/axios";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/MovieDetailScheduleStyle.css";
import locationPicker from "../../assets/logo/location.png";
import ebv from "../../assets/logo/ebv.png";
import hiflix from "../../assets/logo/hiflix.png";
import cineone from "../../assets/logo/cineone.png";

export default function MovieDetailSchedule(props) {
  const [schedules, setSchedules] = useState([]);
  const [cities, setCities] = useState(["", "jakarta", "bandung", "bogor", "depok"]);
  const [selectedCity, setSelectedCity] = useState("");

  const getSchedule = () => {
    axios
      .get(
        `/schedule/all?page=1&limit=10&location=${selectedCity}&sort=DESC&movie_id=${props.idMovie}`
      )
      .then((res) => {
        setSchedules(res.data.data);
      });
  };

  console.log(selectedCity);

  useEffect(() => {
    getSchedule();
  }, [selectedCity]);

  return (
    <>
      <section className="showtimes">
        <div className="container">
          <div className="showtime-header pt-5">
            <div className="showtime-header__title text-center">Showtimes and Tickets</div>
            <div className="row filter d-flex justify-content-center">
              <div className="showtime__filter d-flex pt-5 justify-content-md-evenly col-md-6">
                <div className="picker date-picker">
                  <input
                    type="date"
                    value={props.date}
                    onChange={props.changeDate}
                    className="date-picker__filter"
                  />
                </div>
                <div className="dropdown picker location-picker">
                  <button
                    className="btn location-picker-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={locationPicker} alt="location" className="calendar" />
                    <span className="location-selected">Location</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {/* looping by data public API https://farizdotid.com/blog/dokumentasi-api-daerah-indonesia/
    I */}
                    {cities.map((item) => (
                      <li key={item} onClick={() => setSelectedCity(item)}>
                        <a className="dropdown-item" href="#">
                          {item === "" ? "All locations" : item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="showtime-schedules py-5 my-5">
            <div className="row d-flex justify-content-evenly text-center">
              {schedules.length > 0 ? (
                schedules.map((item) => (
                  <div className="schedule-1 schedule-list p-4 mx-2" key={item.id_schedule}>
                    <div className="header d-flex justify-content-md-between">
                      <div className="logo pe-4">
                        <img
                          src={
                            item.teater_name === "ebu.id"
                              ? ebv
                              : item.teater_name === "hiflix"
                              ? hiflix
                              : cineone
                          }
                          alt="logo"
                        />
                      </div>
                      <div className="cinema-detail">
                        <div className="cinema-detail__name text-start pb-1">
                          {item.teater_name}
                        </div>
                        <div className="cinema-detail__address text-start">
                          {/* Whatever street No.12, South Purwokerto */}
                          {item.location}
                        </div>
                      </div>
                    </div>
                    <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                      {item.time_schedule.map((time) => (
                        <span
                          key={time}
                          onClick={() => {
                            props.handleSchedule(
                              time,
                              item.id_schedule,
                              item.price,
                              item.teater_name
                            );
                          }}
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                    <div className="schedule-price d-flex justify-content-between pt-4">
                      <div className="price-title">Price</div>
                      <div className="price-amount">{item.price} / seat</div>
                    </div>
                    <div className="booking-button pt-4">
                      <button className="btn-booking" onClick={props.order}>
                        Book now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="m-0">no data schedule</h1>
              )}
            </div>
            {/* <div className="view-more text-center pt-5 my-5">
                    <span>View more</span>
                  </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
