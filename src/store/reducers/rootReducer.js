import { combineReducers } from "redux";

import { favouritesVisibility } from "./favouritesVisibility";
import { jokeSearch } from "./jokeSearch";
import { jokes } from "./jokes";
import { favourites } from "./favourites";
const rootReducer = combineReducers({
  favouritesVisibility,
  jokeSearch,
  jokes,
  favourites,
});

export default rootReducer;
