import { VISIBILITY_OF_FAVOURITES } from "../actions/visibilityOfFavourites";

export const favouritesVisibilityReducer = (state = false, action) => {
  switch (action.type) {
    case VISIBILITY_OF_FAVOURITES: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
