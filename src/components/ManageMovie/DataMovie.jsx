import React, { useState } from "react";
import { connect } from "react-redux";
import { getAllMovie, deleteMovie } from "../../stores/action/movieAll";
import { selectedMovieToManage } from "../../stores/action/manageMovie";
import { Modal, Button } from "react-bootstrap";
import axios from "../../Utils/axios";

const DataMovie = (props) => {
  const [search, setSearch] = useState(props.resultSearch);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [del, setDel] = useState(false);
  const [error, setError] = useState("");
  const { dataMovie } = props.dataMovie;
  const [idSelected, setIdSelected] = useState({ id: "", name: "" });
  const [sort, setsort] = useState([
    { text: "A-Z", val: "ASC" },
    { text: "Z-A", val: "DESC" }
  ]);
  const [paginate, setPaginate] = useState({
    page: 1,
    order: "movie_name",
    sort: "ASC",
    limit: 4,
    totalPage: 0
  });

  const changeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const searchMovie = (key) => {
    const { page, order, sort, limit } = paginate;
    if (!keyword) {
      setSearch([]);
      props.isResetSearch(true);
      return;
    } else {
      axios
        .get(`/movie/all?page=${page}&name=${keyword}&order=movie_name&sort=${sort}&limit=4`)
        .then((res) => {
          console.log(res, "resssssdadasdd");
          setSearch(res.data.data);
          props.totalPage(res.data.pagination.totalPage);
          props.isSearch(res.data.data);
          props.keyword(keyword);
          // setPaginate({ ...paginate, totalPage: res.data.pagination.totalPage });
          // console.log(res.data, "resssss");
        });
    }
  };

  // console.log(paginate, "hasilll");

  const deleteData = () => {
    // e.preventDefault();
    const { page, order, sort, limit } = paginate;

    props.deleteMovie(idSelected.id).then((res) => {
      setShow(false);
      setIdSelected({ id: "", name: "" });
      props.getAllMovie(page, order, sort, limit).then((res) => {
        props.totalPage(res.value.data.pagination.totalPage);
      });
    });
  };

  const handleDeleteBtn = (id, name) => {
    setShow(true);
    setDel(true);
    setIdSelected({ ...idSelected, id: id, name: name });
    setError("Are you sure want to delete this movie? ");
  };

  const handleClose = () => {
    setShow(false);
    setIdSelected({ ...idSelected, id: "", name: "" });
  };

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
      <div className="row mt-4 pt-4">
        <div className="data-movie__header col-md-6">Data Movie</div>
        <div className="d-flex sort-option justify-content-end col-md-6 align-items-center">
          <div className="dropdown sort me-4">
            <button
              className="btn btn-secondary dropdown-toggle sort-button px-5 sort-movie"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {sort.map((item) => (
                <li
                  key={item.val}
                  className="hover-pointer"
                  onClickCapture={() => props.handleSort(item.val)}
                >
                  <a className="dropdown-item text-center">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <input
            type="text"
            placeholder="Search movie name ..."
            className="movie-name-search text-center sort mt-0"
            onChange={changeKeyword}
          />
          <button onClick={searchMovie} className="ms-3 px-2">
            Search
          </button>
        </div>
        <div className="wrapper mb-5 p-4 pt-5 mt-4 d-flex flex-wrap justify-content-center">
          {search.length > 0
            ? search.map((list) => (
                <div className="movie-list-col py-5 px-1 text-center" key={list.id_movie}>
                  <div className="movie-card mx-auto p-4">
                    <img
                      src={
                        list.image
                          ? `${process.env.REACT_APP_BASEURL}uploads/movie/${list.image}`
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                      alt=""
                      className="movie-card-banner w-100"
                    />
                    <div className="movie-card-name pt-2">
                      <span>{list.movie_name}</span>
                    </div>
                    <div className="movie-card-category">
                      <span>{list.category}</span>
                    </div>
                    <div className="button-group-card">
                      <button
                        className="btn-update btn-card d-block mx-auto w-100 my-3 py-1"
                        // onClick={() => props.setIsUpdate(true, list)}
                        onClick={() => props.setIsUpdate(true, list)}
                      >
                        Update
                      </button>
                      <button
                        className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1"
                        // onClick={(event) => deleteData(event, item.id_movie)}
                        onClick={() => handleDeleteBtn(item.id_movie, item.movie_name)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : dataMovie.map((item) => (
                <div className="movie-list-col py-5 px-1 text-center" key={item.id_movie}>
                  <div className="movie-card mx-auto p-4">
                    <img
                      src={
                        item.image
                          ? `${process.env.REACT_APP_BASEURL}uploads/movie/${item.image}`
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                      alt=""
                      className="movie-card-banner w-100"
                    />
                    <div className="movie-card-name pt-2">
                      <span>{item.movie_name}</span>
                    </div>
                    <div className="movie-card-category">
                      <span>{item.category}</span>
                    </div>
                    <div className="button-group-card">
                      <button
                        className="btn-update btn-card d-block mx-auto w-100 my-3 py-1"
                        // onClick={() => props.setIsUpdate(true, item)}
                        onClick={() => props.setIsUpdate(true, item)}
                      >
                        Update
                      </button>
                      <button
                        className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1"
                        // onClick={(event) => deleteData(event, item.id_movie)}
                        onClick={() => handleDeleteBtn(item.id_movie, item.movie_name)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  dataMovie: state.getAllMovie,
  dataSelected: state.selecdtedData
});

const mapDispatchToProps = {
  getAllMovie,
  deleteMovie,
  selectedMovieToManage
};

export default connect(mapStateToProps, mapDispatchToProps)(DataMovie);
