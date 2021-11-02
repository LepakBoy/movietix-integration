import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { postMovie, getAllMovie, updateMovie } from "../../stores/action/movieAll";

const FormMovie = (props) => {
  const form = props.form;
  const [formData, setFormData] = useState({
    movie_name: "",
    director: "",
    releaseDate: "",
    category: "",
    cast: "",
    duration: "",
    synopsis: "",
    image: ""
  });

  const isUpdate = props.isUpdate;

  const { releaseDate, duration, id_movie } = form;
  const date = moment(releaseDate).format("YYYY-MM-DD");

  const changeText = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //tambah get data yang baru di post
  const postData = (e) => {
    e.preventDefault();
    props.postMovie(formData).then((res) => {
      props.getAllMovie();
    });
  };

  const updateData = (e) => {
    e.preventDefault();
    console.log(e.target.reset(), "reseeeeeeeeettttttttttttttt");
    props.updateMovie(id_movie, formData).then((res) => {
      setFormData({
        movie_name: ""
      });
      e.target.reset();
      console.log(res);
      props.getAllMovie();
    });
  };

  // director: "",
  //     releaseDate: "",
  //     category: "",
  //     cast: "",
  //     duration: "",
  //     synopsis: "",
  //     image: "
  const resetForm = () => {
    setFormData({
      movie_name: ""
    });
  };

  useEffect(() => {
    // setFormData({...props.})
  });
  console.log(formData, "form data");
  console.log(isUpdate);
  console.log(props, "state");

  return (
    <>
      <div className="row pt-3 mt-3">
        <div className="form-movie col-md-12 px-0">
          <div className="form-movie__header">Form Movie</div>
          <div className="wrapper p-4 pt-5 mt-4">
            <form action="" onSubmit={isUpdate ? updateData : (event) => postData(event)}>
              <div className="form-movie__data row">
                <div className="col-md-3">
                  <div className="movie-banner p-3 d-flex justify-content-center align-items-center">
                    <img
                      src={
                        form.image
                          ? `http://localhost:3000/uploads/movie/${form.image}`
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                      alt=""
                    />
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
                          name="movie_name"
                          id=""
                          onChange={(event) => changeText(event)}
                          defaultValue={form.movie_name}
                        />
                      </div>
                      <div className="movie-director">
                        <div className="label my-2">Director</div>
                        <input
                          type="text"
                          className="manage-movie-input ps-3 mb-3 w-100"
                          name="director"
                          id=""
                          onChange={(event) => changeText(event)}
                          defaultValue={form.director}
                        />
                      </div>
                      <div className="movie-release">
                        <div className="label my-2">Release Date</div>
                        <input
                          type="text"
                          className="manage-movie-input ps-3 mb-3 w-100"
                          name="releaseDate"
                          id=""
                          onChange={(event) => changeText(event)}
                          defaultValue={form.releaseDate ? date : null}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 right-side pe-0">
                      <div className="movie-category">
                        <div className="label my-2">Category</div>
                        <input
                          type="text"
                          className="manage-movie-input ps-3 mb-3 w-100"
                          name="category"
                          id=""
                          onChange={(event) => changeText(event)}
                          defaultValue={form.category}
                        />
                      </div>
                      <div className="movie-cast">
                        <div className="label my-2">Cast</div>
                        <input
                          type="text"
                          className="manage-movie-input ps-3 mb-3 w-100"
                          name="cast"
                          id=""
                          onChange={(event) => changeText(event)}
                          defaultValue={form.cast}
                        />
                      </div>
                      <div className="movie-duration ">
                        <div className="row">
                          <div className="col-6 hour ps-0">
                            <div className="label my-2">Duration Hour</div>
                            <input
                              type="text"
                              className="manage-movie-input ps-3 mb-3 w-100"
                              name="duration"
                              id=""
                              onChange={(event) => changeText(event)}
                              defaultValue={form.duration}
                            />
                          </div>
                          <div className="col-6 minute pe-0">
                            <div className="label my-2">Duration Minutes</div>
                            <input
                              type="text"
                              className="manage-movie-input ps-3 mb-3 w-100"
                              name="duration"
                              id=""
                              onChange={(event) => changeText(event)}
                              defaultValue={form.duration}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="synopsis">
                  <div className="label my-2">Synopsis</div>
                  <textarea
                    name="synopsis"
                    id=""
                    cols="100"
                    className="ps-3"
                    rows="4"
                    defaultValue={form.synopsis}
                  ></textarea>
                </div>
                <div className="button-group row  py-3 my-2">
                  <div className="col-md-12 justify-content-end d-flex ">
                    <button
                      className="movie-manage-button button-reset me-5"
                      type="reset"
                      onClick={resetForm}
                    >
                      Reset
                    </button>
                    <button className="movie-manage-button button-submit" type="submit">
                      {isUpdate ? "Update" : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  dataMovie: state.getAllMovie,
  dataSelected: state.manageMovie
});

const mapDispatchToProps = {
  postMovie,
  getAllMovie,
  updateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(FormMovie);
