import React, { useState, useEffect } from "react";
import TeaterLogo from "../../assets/logo/ebv.png";
import axios from "../../Utils/axios";
import ebv from "../../assets/logo/ebv.png";
import hiflix from "../../assets/logo/hiflix.png";
import cineone from "../../assets/logo/cineone.png";

const DataSchedule = (props) => {
  const [selectedSchedule, setSelectedSchedule] = useState({});
  const [allSchedule, setAllSchedule] = useState([]);
  const [filter, setFilter] = useState({
    page: "",
    limit: "",
    location: "",
    sort: "",
    movie_id: ""
  });
  const { page, limit, location, sort, movie_id } = filter;

  const updateSelectedSchedule = (data) => {
    props.selectedSchedule(data);
  };

  const getAllSchedule = () => {
    axios
      .get(
        `/schedule/all?page=${page}&limit=${limit}&location=${location}&sort=${sort}&movie_id=${movie_id}`
      )
      .then((res) => {
        setAllSchedule(res.data.data);
      });
  };

  // console.log(selectedSchedule, "dipilih");

  useEffect(() => {
    getAllSchedule();
  }, []);
  return (
    <>
      <div className="row mt-5 pt-3 justify-content-between">
        <div className="data-schedule col-md-12">
          <div className="data-schedule__header d-flex justify-content-between">
            <span>Data Schedule</span>
            <div className="sort-option d-flex">
              <div className="dropdown search-schedule">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
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
              <div className="dropdown search-schedule mx-3">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Location
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
              <div className="dropdown search-schedule">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movie
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
          <div className="wrapper p-4 pt-5 mt-4 mb-5 ">
            <div className="data-schedule__data ">
              <div className="row d-flex flex-wrap justify-content-between">
                {/* <!-- mapping from here --> */}
                {allSchedule.length > 0 ? (
                  allSchedule.map((item) => (
                    <div className="col-lg-4 schedule-list" key={item.id_schedule}>
                      <div className="card p-3 mt-3">
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
                              className="cinema-logo"
                              alt=""
                            />
                          </div>
                          <div className="cinema-detail">
                            <div className="cinema-detail__name text-start pb-1">
                              {item.teater_name === "ebu.id"
                                ? "ebu.id"
                                : item.teater_name === "hiflix"
                                ? "hiflix"
                                : "cineone"}
                            </div>
                            <div className="cinema-detail__address text-start">{item.location}</div>
                          </div>
                        </div>
                        <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                          {item.time_schedule.map((time) => (
                            <span className="w-25 time-list" key={time}>
                              {time}
                            </span>
                          ))}
                        </div>
                        <div className="schedule-price d-flex justify-content-between pt-4">
                          <div className="price-title">Price</div>
                          <div className="price-amount">{`Rp. ${item.price}/seat`}</div>
                        </div>
                        <div className="booking-button pt-4 d-flex">
                          <button
                            className="btn-update w-100 me-2"
                            onClick={() => updateSelectedSchedule(item)}
                          >
                            Update
                          </button>
                          <button className="btn-delete w-100 ms-2">Delete</button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center">no data</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSchedule;
