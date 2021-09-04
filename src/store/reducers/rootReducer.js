import { combineReducers } from "redux";

import { favouritesVisibilityReducer } from "./favouritesVisibilityReducer";
import { jokeSearchReducer } from "./jokeSearchReducer";
import { jokesReducer } from "./jokesReducer";
import { favouritesReducer } from "./favouritesReducer";
const rootReducer = combineReducers({
  favouritesVisibility: favouritesVisibilityReducer,
  jokeSearch: jokeSearchReducer,
  jokes: jokesReducer,
  favourites: favouritesReducer
});

export default rootReducer;
