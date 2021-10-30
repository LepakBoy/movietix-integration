import React, { useState } from "react";
import MovieBanner from "../../assets/img/mv5.jpg";

const FormMovie = () => {
  return (
    <>
      <div className="row pt-3 mt-3">
        <div className="form-movie col-md-12 px-0">
          <div className="form-movie__header">Form Movie</div>
          <div className="wrapper p-4 pt-5 mt-4">
            <div className="form-movie__data row">
              <div className="col-md-3">
                <div className="movie-banner p-3 d-flex justify-content-center align-items-center">
                  <img src={MovieBanner} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6 left-side">
                    <div className="movie-name">
                      <div className="label my-2">Movie Name</div>
                      <input
                        type="text"
                        className="manage-movie-input ps-3 mb-3 w-100"
                        name=""
                        id=""
                        value="Spider-Man:Homecoming"
                      />
                    </div>
                    <div className="movie-director">
                      <div className="label my-2">Director</div>
                      <input
                        type="text"
                        className="manage-movie-input ps-3 mb-3 w-100"
                        name=""
                        id=""
                        value="Jon Watts"
                      />
                    </div>
                    <div className="movie-release">
                      <div className="label my-2">Release Date</div>
                      <input
                        type="text"
                        className="manage-movie-input ps-3 mb-3 w-100"
                        name=""
                        id=""
                        value="07/05/2020"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 right-side pe-0">
                    <div className="movie-category">
                      <div className="label my-2">Category</div>
                      <input
                        type="text"
                        className="manage-movie-input ps-3 mb-3 w-100"
                        name=""
                        id=""
                        value="Action, Adventure"
                      />
                    </div>
                    <div className="movie-cast">
                      <div className="label my-2">Cast</div>
                      <input
                        type="text"
                        className="manage-movie-input ps-3 mb-3 w-100"
                        name=""
                        id=""
                        value="Tom Holland, Michael Keaton, Robert Dow.."
                      />
                    </div>
                    <div className="movie-duration ">
                      <div className="row">
                        <div className="col-6 hour ps-0">
                          <div className="label my-2">Duration Hour</div>
                          <input
                            type="text"
                            className="manage-movie-input ps-3 mb-3 w-100"
                            name=""
                            id=""
                            value="2"
                          />
                        </div>
                        <div className="col-6 minute pe-0">
                          <div className="label my-2">Duration Minutes</div>
                          <input
                            type="text"
                            className="manage-movie-input ps-3 mb-3 w-100"
                            name=""
                            id=""
                            value="13"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="synopsis">
                <div className="label my-2">Synopsis</div>
                <textarea name="" id="" cols="100" className="ps-3" rows="4">
                  Thrilled by his experience with the Avengers, Peter returns home, where he lives
                  with his Aunt May,
                </textarea>
              </div>
              <div className="button-group row  py-3 my-2">
                <div className="col-md-12 justify-content-end d-flex ">
                  <button className="movie-manage-button button-reset me-5">Reset</button>
                  <button className="movie-manage-button button-submit" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormMovie;
