import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { postMovie, getAllMovie, updateMovie } from "../../stores/action/movieAll";
import { Modal, Button } from "react-bootstrap";

const FormMovie = (props) => {
  const [imagePrev, setImagePrev] = useState("");
  const target = useRef(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
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
    image: null
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [paginate, setPaginate] = useState({
    page: 1,
    order: "movie_name",
    sort: "ASC",
    limit: 4,
    totalPage: 0
  });

  const handleClose = () => {
    setShow(false);
  };

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

  const handleFile = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
    if (e.target.files[0]) {
      setImagePrev(URL.createObjectURL(e.target.files[0]));
    }
  };

  //tambah get data yang baru di post
  const postData = () => {
    const dataImage = new FormData();
    const { page, order, sort, limit } = paginate;

    for (const item in formData) {
      dataImage.append(item, formData[item]);
      if (formData[item] === "") {
        setError("All input must be filled");
        setShow(true);
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
        return;
      }
    }

    props
      .postMovie(dataImage)
      .then((res) => {
        setShow(true);
        setError("Success post new data");
        props.getAllMovie(page, order, sort, limit).then((res) => {
          props.totalPage(res.value.data.pagination.totalPage);
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
          image: ""
        });
        setImagePrev("");
      })
      .catch((err) => {
        setError("All input must be filled");
        setShow(true);

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
      });
  };

  const updateData = () => {
    const dataImage = new FormData();
    for (const item in formData) {
      dataImage.append(item, formData[item]);
    }
    const { page, order, sort, limit } = paginate;
    props.updateMovie(id_movie, dataImage).then((res) => {
      setError("Success update movie");
      setShow(true);
      resetForm();
      props.getAllMovie(page, order, sort, limit).then((res) => {
        // setPaginate({ ...paginate, totalPage: res.value.data.pagination.totalPage });
      });
    });
  };

  const resetForm = () => {
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
    setImagePrev("");
  };

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
      <div className="row pt-3 mt-3">
        <div className="form-movie col-md-12 px-0">
          <div className="form-movie__header">Form Movie</div>
          <div className="wrapper p-4 pt-5 mt-4">
            <div className="form-movie__data row">
              <div className="col-md-3">
                <div className="movie-banner mx-auto justify-content-center">
                  <div className="mx-4">
                    <img
                      src={
                        imagePrev
                          ? imagePrev
                          : formData.image
                          ? `${process.env.REACT_APP_BASEURL}uploads/movie/${formData.image}`
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                      alt=""
                    />
                  </div>

                  <input
                    type="file"
                    name="user_image"
                    ref={target}
                    style={{ display: "none" }}
                    onChange={handleFile}
                  />
                  <button
                    className="d-block mt-4 mx-auto btn-image button-submit p-1 mx-auto"
                    onClick={() => target.current.click()}
                  >
                    Choose image
                  </button>
                </div>
                {/* <input type="file" /> */}
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
                  onChange={(event) => changeText(event)}
                  // placeholder={formData.synopsis}
                  value={formData.synopsis}
                ></textarea>
              </div>
              <div className="button-group row  py-3 my-2">
                <div className="col-md-12 justify-content-end d-flex ">
                  <button
                    onClick={resetForm}
                    className="movie-manage-button button-reset me-5"
                    type="reset"
                  >
                    Reset
                  </button>
                  <button
                    onClick={isUpdate ? updateData : (event) => postData(event)}
                    className="movie-manage-button button-submit"
                    type="submit"
                  >
                    {isUpdate ? "Update" : "Submit"}
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
