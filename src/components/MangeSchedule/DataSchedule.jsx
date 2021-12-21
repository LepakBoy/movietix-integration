import React, { useState, useEffect } from "react";
import axios from "../../Utils/axios";
import ebv from "../../assets/logo/ebv.png";
import hiflix from "../../assets/logo/hiflix.png";
import cineone from "../../assets/logo/cineone.png";
import Pagination from "react-paginate";
import { Modal, Button } from "react-bootstrap";

const DataSchedule = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [del, setDel] = useState(false);
  const [idSelected, setIdSelected] = useState("");
  const [cities, setCities] = useState(["", "jakarta", "bandung", "bogor", "depok"]);
  const [selectedSchedule, setSelectedSchedule] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [allSchedule, setAllSchedule] = useState([]);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 6,
    location: "",
    sort: "ASC",
    movie_id: "",
    totalPage: 0
  });
  const [sortList, setSortList] = useState([
    { text: "A-Z", val: "ASC" },
    { text: "Z-A", val: "DESC" }
  ]);
  // const { page, limit, location, sort, movie_id, totalPage } = filter;

  const handleDeleteBtn = (id) => {
    setShow(true);
    setDel(true);
    setIdSelected(id);
    setError("Are you sure want to delete this schedule? ");
  };

  const deleteData = () => {
    axios.delete(`/schedule/${idSelected}`).then((res) => {
      window.location.reload();
      setShow(false);
      setIdSelected("");
    });
  };

  const handleClose = () => {
    setShow(false);
    setIdSelected("");
    setDel(false);
  };

  const updateSelectedSchedule = (data) => {
    props.selectedSchedule(data);
  };

  const getAllMovie = () => {
    axios.get("/movie/all").then((res) => {
      setAllMovies(res.data.data);
    });
  };

  const handlePagination = (e) => {
    const { limit, location, sort, movie_id } = filter;
    const selectedPage = e.selected + 1;
    setFilter({ ...filter, page: selectedPage });
    getAllSchedule(selectedPage, limit, location, sort, movie_id);
  };

  const getAllSchedule = (page, limit, location, sort, movie_id) => {
    axios
      .get(
        `/schedule/all?page=${page}&limit=${limit}&location=${location}&sort=${sort}&movie_id=${movie_id}`
      )
      .then((res) => {
        setAllSchedule(res.data.data);
        setFilter({ ...filter, totalPage: res.data.pagination.totalPage });
      });
  };

  const handleSort = (val) => {
    const { page, limit, location, sort, movie_id } = filter;
    setFilter({ ...filter, sort: val });
    getAllSchedule(page, limit, location, val, movie_id);
  };

  const handleLocation = (loc) => {
    const { page, limit, location, sort, movie_id } = filter;
    setFilter({ ...filter, location: loc });
    getAllSchedule(page, limit, loc, sort, movie_id);
  };

  const handleMovieId = (id) => {
    const { page, limit, location, sort, movie_id } = filter;
    setFilter({ ...filter, movie_id: id });
    getAllSchedule(page, limit, location, sort, id);
  };

  useEffect(() => {
    props.dataAllSchedule.length > 0 ? setAllSchedule(props.dataAllSchedule) : null;
    const { page, limit, location, sort, movie_id } = filter;
    getAllSchedule(page, limit, location, sort, movie_id);
    getAllMovie();
  }, [props]);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>{error.split(" ")[0] === "Success" ? "Success.." : "Oopss.."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant={del ? "danger" : "primary"} onClick={deleteData}>
            {del ? "Delete" : "Ok"}
          </Button>
          {del ? (
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
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
                  {sortList.map((item) => (
                    <li
                      key={item.val}
                      onClick={() => handleSort(item.val)}
                      className="hover-pointer"
                    >
                      <a className="dropdown-item">{item.text}</a>
                    </li>
                  ))}
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
                  {cities.map((item) => (
                    <li className="hover-pointer" onClick={() => handleLocation(item)} key={item}>
                      <a className="dropdown-item">{item === "" ? "All locations" : item}</a>
                    </li>
                  ))}
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
                  {allMovies.map((item) => (
                    <li
                      onClick={() => handleMovieId(item.id_movie)}
                      className="hover-pointer"
                      key={item.id_movie}
                    >
                      <a className="dropdown-item">{item.movie_name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper p-4 pt-1 mt-4 mb-5 ">
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
                          <button
                            onClick={() => handleDeleteBtn(item.id_schedule)}
                            className="btn-delete w-100 ms-2"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center">no data</div>
                )}
              </div>
              <div className="pagination-nav mt-5 mb-2 d-flex justify-content-center">
                {" "}
                <Pagination
                  previousLabel={false}
                  nextLabel={false}
                  breakLabel={"..."}
                  pageCount={filter.totalPage}
                  onPageChange={handlePagination}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  disabledClassName={"disabled"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSchedule;
