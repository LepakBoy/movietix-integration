import React, { useEffect, useState } from "react";
import banner from "../../assets/img/mv5.jpg";
import addTime from "../../assets/logo/add-time.png";
import ebv from "../../assets/logo/ebv.png";
import cineone from "../../assets/logo/cineone.png";
import hiflix from "../../assets/logo/hiflix.png";
import { connect } from "react-redux";
import axios from "../../Utils/axios";

const FormSchedule = (props) => {
  const [cities, setCities] = useState(["", "jakarta", "bandung", "bogor", "depok"]);
  const { dataAllMovie } = props;
  const [allMovie, setAllMovie] = useState([]);
  const [schedule, setSchedule] = useState({});
  const [movieSchedule, setmovieSchedule] = useState({});

  const getAllMovie = () => {
    axios.get("/movie/all").then((res) => {
      setAllMovie(res.data.data);
    });
  };

  const getMovieById = (id) => {
    axios.get(`/movie/${id}`).then((res) => {
      setmovieSchedule(res.data.data[0]);
      // console.log(res.data.data[0], "data");
    });
  };
  // console.log(allMovie, "all movie");
  console.log(schedule);

  // props.schedule.id_schedule ? getMovieById(props.schedule.id_movie) : alert("gaada");

  useEffect(() => {
    getAllMovie();
    setSchedule(props.schedule);

    // console.log(schedule, "props");
  }, [props]);
  // schedule ? alert("ada") : alert("ga ada");
  // console.log(props.schedule, "state sch form sch");
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
                            {allMovie.map((item) => (
                              <li key={item.id_movie}>
                                <a className="dropdown-item" href="#">
                                  {item.movie_name}
                                </a>
                              </li>
                            ))}
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
                            <img src={ebv} alt="" />
                          </button>
                          <button type="submit" className="btn-premiere-ebuid btn-premiere">
                            <img src={hiflix} alt="" />
                          </button>
                          <button type="submit" className="btn-premiere-ebuid btn-premiere">
                            <img src={cineone} alt="" />
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
                            {cities.map((item) => (
                              <li key={item}>
                                <a className="dropdown-item" href="#">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="movie-date mt-3">
                        <div className="row">
                          <div className="date-start col-6">
                            <div className="label mb-2">Date Start</div>
                            <input
                              type="date"
                              className="schedule-input w-100"
                              value="07/05/2021"
                            />
                          </div>
                          <div className="date-end col-6">
                            <div className="label mb-2">Date End</div>
                            <input
                              type="date"
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
                              <img src={addTime} alt="" />
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

const mapStateToProps = (state) => ({
  dataAllMovie: state.getAllMovie
});

export default connect(mapStateToProps)(FormSchedule);
