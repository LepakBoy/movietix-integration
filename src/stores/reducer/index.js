import { combineReducers } from "redux";
import counter from "./counter";
import auth from "./auth";
import getAllMovie from "./movieAll";
import manageMovie from "./manageMovie";
import getDataUser from "./dataUser";

export default combineReducers({
  counter: counter,
  auth,
  getAllMovie,
  manageMovie,
  getDataUser
});
