import axios from "../../Utils/axios";

export const getDataUser = (data) => {
  return {
    type: "GETDATA",
    payload: axios.get(`user/${data}`)
  };
};
