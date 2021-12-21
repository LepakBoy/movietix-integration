import React, { useEffect, useState } from "react";
import addTime from "../../assets/logo/add-time.png";
import ebv from "../../assets/logo/ebv.png";
import cineone from "../../assets/logo/cineone.png";
import hiflix from "../../assets/logo/hiflix.png";
import { connect } from "react-redux";
import axios from "../../Utils/axios";
import { Modal, Button } from "react-bootstrap";

const teater = [
  { id_teater: 1, teater_name: "ebu.id", img_teater: ebv },
  { id_teater: 2, teater_name: "hiflix", img_teater: hiflix },
  { id_teater: 3, teater_name: "cinepolis", img_teater: cineone }
];

const FormSchedule = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [cities, setCities] = useState(["jakarta", "bandung", "bogor", "depok"]);
  const { dataAllMovie } = props;
  const [allMovie, setAllMovie] = useState([]);
  // schedule :data selected schedule from component data schedule
  const [schedule, setSchedule] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const [form, setForm] = useState({
    id_movie: "",
    teater_name: "",
    price: "",
    location: "",
    date_start: "",
    date_end: "",
    time_schedule: []
  });
  const [filter, setFilter] = useState({
    page: 1,
    limit: 6,
    location: "",
    sort: "ASC",
    movie_id: "",
    totalPage: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "id_movie") {
      axios.get(`/movie/${value}`).then((res) => {
        setImagePreview(res.data.data[0].image);
      });
    }
  };

  const updateSchedule = () => {
    const { page, limit, location, sort, movie_id } = filter;
    const data = { ...form, time_schedule: form.time_schedule.join(",") };
    axios.patch(`/schedule/${schedule.id_schedule}`, data).then((res) => {
      const getData = getAllSchedule(page, limit, location, sort, movie_id);
      setIsUpdate(false);
      setForm({
        ...form,
        id_movie: "",
        teater_name: "",
        price: "",
        location: "",
        date_start: "",
        date_end: "",
        time_schedule: []
      });
      setError("Success update schedule");
      setShow(true);
      setSchedule([]);
      setImagePreview("");
      console.log(form, "forminput");
    });
  };

  const resetForm = () => {
    window.location.reload();
  };

  const handleClose = () => {
    setShow(false);
    setError("");
    window.location.reload();
  };

  const postSchedule = () => {
    for (const item in form) {
      if (!form[item]) {
        setError("All input must be fiiled");
        setShow(true);
        return;
      }
    }
    const data = { ...form, time_schedule: form.time_schedule.join(",") };
    axios.post("/schedule", data).then((res) => {
      setError("Success add schedule");
      setShow(true);
    });
  };

  const getAllSchedule = (page, limit, location, sort, movie_id) => {
    axios
      .get(
        `/schedule/all?page=${page}&limit=${limit}&location=${location}&sort=${sort}&movie_id=${movie_id}`
      )
      .then((res) => {
        props.allSchedule(res.data.data);
        setFilter({ ...filter, totalPage: res.data.pagination.totalPage });
      });
  };

  const getAllMovie = () => {
    axios.get("/movie/all").then((res) => {
      setAllMovie(res.data.data);
    });
  };

  const selectTeater = (data) => {
    setForm({ ...form, teater_name: data });
  };

  const handleTime = (e) => {
    if (e.key === "Enter") {
      setForm({ ...form, time_schedule: [...form.time_schedule, e.target.value] });
    }
    setShowInput(false);
  };

  useEffect(() => {
    if (Object.keys(schedule).length > 0) {
      setIsUpdate(true);
      setImagePreview(schedule.image);
      setForm(schedule);
    } else {
      setForm({
        ...form,
        id_movie: "",
        teater_name: "",
        price: "",
        location: "",
        date_start: "",
        date_end: "",
        time_schedule: []
      });
    }

    getAllMovie();
    setSchedule(props.schedule);
  }, [props, isUpdate, schedule]);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>{error.split(" ")[0] === "Success" ? "Success.." : "Oopss.."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row pt-5">
        <div className="form-schedule col-md-12">
          <div className="form-movie__header">Form Schedule</div>
          <div className="wrapper p-4 pt-5 pb-5 mt-4">
            <div className="form-schedule__data">
              <div className="row">
                <div className="col-md-3 movie-banner text-center">
                  <img
                    src={
                      imagePreview
                        ? `${process.env.REACT_APP_BASEURL}uploads/movie/${imagePreview}`
                        : null
                    }
                    alt=""
                  />
                </div>
                <div className="col-md-9 schedule-form">
                  <div className="row">
                    <div className="col-md-6 left-side">
                      <div className="movie-name">
                        <div className="label mb-2" htmlFor="">
                          Movie
                        </div>
                        <div className="dropdown">
                          <select
                            onChange={handleChange}
                            className="w-100 input-select"
                            name="id_movie"
                            value={form.id_movie}
                          >
                            <option>Select movie</option>
                            {allMovie.map((item) => (
                              <option key={item.id_movie} value={item.id_movie}>
                                {item.movie_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="movie-price mt-3">
                        <div className="label mb-2">Price</div>
                        <input
                          name="price"
                          onChange={handleChange}
                          type="number"
                          className="schedule-input w-100"
                          value={form.price}
                        />
                      </div>
                      <div className="movie-premier mt-3">
                        <div className="label mb-2">Premiere</div>
                        <div className="premiere-btn-group d-flex justify-content-between">
                          {teater.map((item, index) => (
                            <button
                              onClick={() => selectTeater(item.teater_name)}
                              key={item.id}
                              type="submit"
                              className={`btn-premiere-ebuid btn-premiere ${
                                item.teater_name === form.teater_name ? "bg-primary" : ""
                              }`}
                            >
                              <img src={item.img_teater} alt="" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 right-side">
                      <div className="movie-location ps-2">
                        <div className="label mb-2">Location</div>
                        <div className="dropdown">
                          <select
                            onChange={handleChange}
                            className="w-100 input-select"
                            name="location"
                            value={form.location}
                          >
                            <option>Select location</option>
                            {cities.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="movie-date mt-3">
                        <div className="row">
                          <div className="date-start col-6">
                            <div className="label mb-2">Date Start</div>
                            <input
                              value={form.date_start}
                              name="date_start"
                              onChange={handleChange}
                              type="date"
                              className="schedule-input w-100"
                            />
                          </div>
                          <div className="date-end col-6">
                            <div className="label mb-2">Date End</div>
                            <input
                              value={form.date_end}
                              name="date_end"
                              onChange={handleChange}
                              type="date"
                              className="schedule-input w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="movie-time mt-3">
                        <div className="label mb-2">Time</div>
                        <div className="row">
                          <div className="time-list d-flex justify-content-between flex-wrap">
                            {showInput ? (
                              <input onKeyPress={handleTime} type="time"></input>
                            ) : (
                              <button
                                onClick={() => setShowInput(true)}
                                className="btn-time-list col-3 add-time"
                              >
                                <img src={addTime} alt="" />
                              </button>
                            )}
                            {form.time_schedule.length > 0
                              ? form.time_schedule.map((item, index) => (
                                  <button key={index} className="btn-time-list col-3">
                                    {item}
                                  </button>
                                ))
                              : null}
                          </div>
                        </div>
                      </div>
                      <div className="button-group text-end my-4 d-flex justify-content-between">
                        <button onClick={resetForm} className="btn-reset btn-schedule">
                          Reset
                        </button>
                        <button
                          onClick={!isUpdate ? postSchedule : updateSchedule}
                          className="btn-submit btn-schedule"
                        >
                          {!isUpdate ? "Submit" : "Update"}
                        </button>
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
