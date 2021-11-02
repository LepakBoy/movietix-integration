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

export const deleteMovie = (data) => {
  return {
    type: "DELETEMOVIE",
    payload: axios.delete(`movie/${data}`)
  };
};
