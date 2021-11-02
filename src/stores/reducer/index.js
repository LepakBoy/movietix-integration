import { combineReducers } from "redux";
import counter from "./counter";
import auth from "./auth";
import getAllMovie from "./movieAll";
import manageMovie from "../../pages/admin/manage-movie";
import getDataUser from "./dataUser";

export default combineReducers({
  counter: counter,
  auth,
  getAllMovie,
  manageMovie,
  getDataUser
});
