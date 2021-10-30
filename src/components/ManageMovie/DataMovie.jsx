import React, { useState } from "react";
import MovieBanner from "../../assets/img/mv5.jpg";

const DataMovie = () => {
  return (
    <>
      <div className="row mt-4 pt-4">
        <div className="data-movie__header col-md-6">Data Movie</div>
        <div className="d-flex sort-option justify-content-end col-md-6 align-items-center">
          <div className="dropdown sort me-4">
            <button
              className="btn btn-secondary dropdown-toggle sort-button px-5"
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
          {/* mapping from here  */}
          <div className="movie-list-col py-5 px-1 text-center">
            <div className="movie-card mx-auto p-4">
              <img src={MovieBanner} alt="" className="movie-card-banner w-100" />
              <div className="movie-card-name pt-2">
                <span>Spider-man:Homecoming</span>
              </div>
              <div className="movie-card-category">
                <span>Action, Adventure</span>
              </div>
              <div className="button-group-card">
                <button className="btn-update btn-card d-block mx-auto w-100 my-3 py-1">
                  Update
                </button>
                <button className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="movie-list-col py-5 px-1 text-center">
            <div className="movie-card mx-auto p-4">
              <img src={MovieBanner} alt="" className="movie-card-banner w-100" />
              <div className="movie-card-name pt-2">
                <span>Spider-man:Homecoming</span>
              </div>
              <div className="movie-card-category">
                <span>Action, Adventure</span>
              </div>
              <div className="button-group-card">
                <button className="btn-update btn-card d-block mx-auto w-100 my-3 py-1">
                  Update
                </button>
                <button className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="movie-list-col py-5 px-1 text-center">
            <div className="movie-card mx-auto p-4">
              <img src={MovieBanner} alt="" className="movie-card-banner w-100" />
              <div className="movie-card-name pt-2">
                <span>Spider-man:Homecoming</span>
              </div>
              <div className="movie-card-category">
                <span>Action, Adventure</span>
              </div>
              <div className="button-group-card">
                <button className="btn-update btn-card d-block mx-auto w-100 my-3 py-1">
                  Update
                </button>
                <button className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="movie-list-col py-5 px-1 text-center">
            <div className="movie-card mx-auto p-4">
              <img src={MovieBanner} alt="" className="movie-card-banner w-100" />
              <div className="movie-card-name pt-2">
                <span>Spider-man:Homecoming</span>
              </div>
              <div className="movie-card-category">
                <span>Action, Adventure</span>
              </div>
              <div className="button-group-card">
                <button className="btn-update btn-card d-block mx-auto w-100 my-3 py-1">
                  Update
                </button>
                <button className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="movie-list-col py-5 px-1 text-center">
            <div className="movie-card mx-auto p-4">
              <img src={MovieBanner} alt="" className="movie-card-banner w-100" />
              <div className="movie-card-name pt-2">
                <span>Spider-man:Homecoming</span>
              </div>
              <div className="movie-card-category">
                <span>Action, Adventure</span>
              </div>
              <div className="button-group-card">
                <button className="btn-update btn-card d-block mx-auto w-100 my-3 py-1">
                  Update
                </button>
                <button className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="movie-list-col py-5 px-1 text-center">
            <div className="movie-card mx-auto p-4">
              <img src={MovieBanner} alt="" className="movie-card-banner w-100" />
              <div className="movie-card-name pt-2">
                <span>Spider-man:Homecoming</span>
              </div>
              <div className="movie-card-category">
                <span>Action, Adventure</span>
              </div>
              <div className="button-group-card">
                <button className="btn-update btn-card d-block mx-auto w-100 my-3 py-1">
                  Update
                </button>
                <button className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="movie-list-col py-5 px-1 text-center">
            <div className="movie-card mx-auto p-4">
              <img src={MovieBanner} alt="" className="movie-card-banner w-100" />
              <div className="movie-card-name pt-2">
                <span>Spider-man:Homecoming</span>
              </div>
              <div className="movie-card-category">
                <span>Action, Adventure</span>
              </div>
              <div className="button-group-card">
                <button className="btn-update btn-card d-block mx-auto w-100 my-3 py-1">
                  Update
                </button>
                <button className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="movie-list-col py-5 px-1 text-center">
            <div className="movie-card mx-auto p-4">
              <img src={MovieBanner} alt="" className="movie-card-banner w-100" />
              <div className="movie-card-name pt-2">
                <span>Spider-man:Homecoming</span>
              </div>
              <div className="movie-card-category">
                <span>Action, Adventure</span>
              </div>
              <div className="button-group-card">
                <button className="btn-update btn-card d-block mx-auto w-100 my-3 py-1">
                  Update
                </button>
                <button className="btn-delete btn-card d-block mx-auto w-100 mt-3 mb-2 py-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataMovie;
