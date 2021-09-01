import { combineReducers } from "redux";

import { favouritesVisibilityReducer } from "./favouritesVisibilityReducer";
import { jokeSearchReducer } from "./jokeSearchReducer";
const rootReducer = combineReducers({
  favouritesVisibility: favouritesVisibilityReducer,
  jokeSearch: jokeSearchReducer
});

export default rootReducer;
