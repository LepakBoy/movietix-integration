import axios from "axios";

const axiosApiIntaces = axios.create({
  //   baseURL: "http://localhost:3000/"
  baseURL: `${process.env.REACT_APP_BASEURL}`
});

// Add a request interceptor
axiosApiIntaces.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntaces.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // JIKA TOKEN TIDAK SESUAI ATAU EXP: LEMPAR KE LOGIN PAGE DAN CLEAR LOCAL STORAGE
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntaces;
