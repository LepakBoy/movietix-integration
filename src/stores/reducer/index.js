import { combineReducers } from "redux";
import counter from "./counter";
import auth from "./auth";
import getAllMovie from "./movieAll";

export default combineReducers({
  counter: counter,
  auth,
  getAllMovie
});
