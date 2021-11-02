import axios from "../../Utils/axios";

export const getAllMovie = () => {
  return {
    type: "GETALLMOVIE",
    payload: axios.get("movie/all")
  };
};

export const postMovie = (data) => {
  return {
    type: "POSTMOVIE",
    payload: axios.post("movie/", data)
  };
};

export const updateMovie = (id, data) => {
  return {
    type: "UPDATEMOVIE",
    payload: axios.patch(`movie/${id}`, data)
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETEMOVIE",
    payload: axios.delete(`movie/${id}`)
  };
};
