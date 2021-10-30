import React from "react";
import banner from "../../assets/img/mv5.jpg";

const FormSchedule = () => {
  return (
    <>
      <div className="row pt-5">
        <div className="form-schedule col-md-12">
          <div className="form-movie__header">Form Schedule</div>
          <div className="wrapper p-4 pt-5 pb-5 mt-4">
            <div className="form-schedule__data">
              <div className="row">
                <div className="col-md-3 movie-banner text-center">
                  <img src={banner} alt="" />
                </div>
                <div className="col-md-9 schedule-form">
                  <div className="row">
                    <div className="col-md-6 left-side">
                      <div className="movie-name">
                        <div className="label mb-2" htmlFor="">
                          Movie
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle w-100"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Select Movie
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
                      <div className="movie-price mt-3">
                        <div className="label mb-2">Price</div>
                        <input type="text" className="schedule-input w-100" value="10" />
                      </div>
                      <div className="movie-premier mt-3">
                        <div className="label mb-2">Premiere</div>
                        <div className="premiere-btn-group d-flex justify-content-between">
                          <button type="submit" className="btn-premiere-ebuid btn-premiere">
                            <img src="./assets/logo/ebv.png" alt="" />
                          </button>
                          <button type="submit" className="btn-premiere-ebuid btn-premiere">
                            <img src="./assets/logo/hiflix.png" alt="" />
                          </button>
                          <button type="submit" className="btn-premiere-ebuid btn-premiere">
                            <img src="./assets/logo/cineone.png" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 right-side">
                      <div className="movie-location">
                        <div className="label mb-2">Location</div>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle w-100"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Select Location
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
                      <div className="movie-date mt-3">
                        <div className="row">
                          <div className="date-start col-6">
                            <div className="label mb-2">Date Start</div>
                            <input
                              type="text"
                              className="schedule-input w-100"
                              value="07/05/2021"
                            />
                          </div>
                          <div className="date-end col-6">
                            <div className="label mb-2">Date End</div>
                            <input
                              type="text"
                              className="schedule-input w-100"
                              value="07/06/2021"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="movie-time mt-3">
                        <div className="label mb-2">Time</div>
                        <div className="row">
                          <div className="time-list d-flex justify-content-between flex-wrap">
                            <button className="btn-time-list col-3 add-time">
                              <img src="./assets/logo/add-time.png" alt="" />
                            </button>
                            <button className="btn-time-list col-3">08.30am</button>
                            <button className="btn-time-list col-3">08.30am</button>
                            <button className="btn-time-list col-3">08.30am</button>
                            <button className="btn-time-list col-3">08.30am</button>
                            <button className="btn-time-list col-3">08.30am</button>
                            <button className="btn-time-list col-3">08.30am</button>
                            <button className="btn-time-list col-3">08.30am</button>
                          </div>
                        </div>
                      </div>
                      <div className="button-group text-end my-4 d-flex justify-content-between">
                        <button className="btn-reset btn-schedule">Reset</button>
                        <button className="btn-submit btn-schedule">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSchedule;
