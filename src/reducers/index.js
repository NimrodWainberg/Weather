import weather from "./weather";
import autoComplete from "./autoComplete";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  weather,
  autoComplete,
});

export default allReducers;
