import { combineReducers } from "redux";

import { jokeSearch } from "./jokeSearch";
import { jokes } from "./jokes";
import { favourites } from "./favourites";
const rootReducer = combineReducers({
  jokeSearch,
  jokes,
  favourites,
});

export default rootReducer;
