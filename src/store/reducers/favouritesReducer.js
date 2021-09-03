import { ADD_FAVOURITE } from "../actions/favourites";
import { REMOVE_FAVOURITE } from "../actions/favourites";

//get favourites FromLocal Storage to initial state
const key = "favourites";
const favouritesFromLocalStorageJSON = localStorage.getItem(key);
// console.log(
//   "favouritesFromLS to initial state ==>",
//   favouritesFromLocalStorageJSON
// );
const initialState = favouritesFromLocalStorageJSON
  ? JSON.parse(favouritesFromLocalStorageJSON)
  : [];

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE: {
      return [...state, action.payload];
    }
    case REMOVE_FAVOURITE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
