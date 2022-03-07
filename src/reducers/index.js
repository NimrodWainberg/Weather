import weather from "./weather";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  weather,
});

export default allReducers;
