import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { postMovie, getAllMovie, updateMovie } from "../../stores/action/movieAll";

const FormMovie = (props) => {
  const form = props.form;
  const { releaseDate, duration, id_movie } = form;
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
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setFormData({
      movie_name: form.movie_name,
      director: form.director,
      releaseDate: form.releaseDate ? moment(form.releaseDate).format("YYYY-MM-DD") : "",
      category: form.category,
      cast: form.cast,
      duration: form.duration,
      synopsis: form.synopsis,
      image: form.image
    });
    setIsUpdate(props.isUpdate);
  }, [form]);

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
    setIsUpdate(false);
    setFormData({
      movie_name: "",
      director: "",
      releaseDate: "",
      category: "",
      cast: "",
      duration: "",
      synopsis: "",
      image: null
    });
  };

  const updateData = (e) => {
    e.preventDefault();
    props.updateMovie(id_movie, formData).then((res) => {
      setFormData({
        movie_name: "",
        director: "",
        releaseDate: "",
        category: "",
        cast: "",
        duration: "",
        synopsis: "",
        image: ""
      });
      setIsUpdate(false);
      props.getAllMovie();
    });
  };

  const resetForm = (e) => {
    e.preventDefault();
    setFormData({
      movie_name: "",
      director: "",
      releaseDate: "",
      category: "",
      cast: "",
      duration: "",
      synopsis: "",
      image: null
    });
    setIsUpdate(false);
  };

  return (
    <>
      <div className="row pt-3 mt-3">
        <div className="form-movie col-md-12 px-0">
          <div className="form-movie__header">Form Movie</div>
          <div className="wrapper p-4 pt-5 mt-4">
            <form
              onReset={(event) => resetForm(event)}
              onSubmit={isUpdate ? updateData : (event) => postData(event)}
            >
              <div className="form-movie__data row">
                <div className="col-md-3">
                  <div className="movie-banner p-3 d-flex justify-content-center align-items-center">
                    <img
                      src={
                        formData.image
                          ? `${process.env.REACT_APP_BASEURL}uploads/movie/${formData.image}`
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
                          value={formData.movie_name}
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
                          value={formData.director}
                        />
                      </div>
                      <div className="movie-release">
                        <div className="label my-2">Release Date</div>
                        <input
                          type="date"
                          className="manage-movie-input ps-3 mb-3 w-100"
                          name="releaseDate"
                          id=""
                          onChange={(event) => changeText(event)}
                          value={formData.releaseDate}
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
                          value={formData.category}
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
                          value={formData.cast}
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
                              value={formData.duration}
                            />
                          </div>
                          {/* <div className="col-6 minute pe-0">
                            <div className="label my-2">Duration Minutes</div>
                            <input
                              type="text"
                              className="manage-movie-input ps-3 mb-3 w-100"
                              name="duration"
                              id=""
                              onChange={(event) => changeText(event)}
                              value={formData.duration}
                            />
                          </div> */}
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
                    value={formData.synopsis}
                  ></textarea>
                </div>
                <div className="button-group row  py-3 my-2">
                  <div className="col-md-12 justify-content-end d-flex ">
                    <button className="movie-manage-button button-reset me-5" type="reset">
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
