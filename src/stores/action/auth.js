import axios from "../../Utils/axios";

export const login = (data) => {
  return {
    // type: untuk menandakan function yg d jalanjkan
    type: "LOGIN",
    payload: axios.post("auth/Login", data)
  };
  //   +++++++++++++++++++++++++++++++++++++++
  //   REGISTER, FORGOT PASSWORD, LOGOUT
};

export const register = (data) => {
  return {
    type: "REGISTER",
    payload: axios.post("auth/register", data)
  };
};
