import React, { useState } from "react";
import { connect } from "react-redux";
import { getAllMovie, deleteMovie } from "../../stores/action/movieAll";
import { selectedMovieToManage } from "../../stores/action/manageMovie";

const DataMovie = (props) => {
  const { dataMovie } = props.dataMovie;

  const deleteData = (e, id) => {
    e.preventDefault();

    props.deleteMovie(id).then((res) => {
      props.getAllMovie();
    });
  };

  const selectedDataMovie = (stat, data) => {
    console.log(stat, data);
    props.selectedMovieToManage(stat, data);
  };

  console.log(props.dataSelected);
  return (
    <>
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
          <input
            type="text"
            placeholder="Search movie name ..."
            className="movie-name-search text-center sort mt-0"
          />
        </div>
        <div className="wrapper mb-5 p-4 pt-5 mt-4 d-flex flex-wrap justify-content-center">
          {dataMovie.map((item) => (
            <div className="movie-list-col py-5 px-1 text-center" key={item.id_movie}>
              <div className="movie-card mx-auto p-4">
                <img
                  src={
                    item.image
                      ? `http://localhost:3000/uploads/movie/${item.image}`
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
                    onClick={() => props.selectedMovieToManage(true, item)}
                  >
                    Update
                  </button>
                  <button
                    className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1"
                    onClick={(event) => deleteData(event, item.id_movie)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* TOAST DELETE DATA */}
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
