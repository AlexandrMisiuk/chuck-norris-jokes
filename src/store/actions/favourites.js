export const ADD_FAVOURITE = "favourites/ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "favourites/REMOVE_FAVOURITE";

// change the visibility of favorites
export const addFavourite = (favorite = {}) => {
  return {
    type: ADD_FAVOURITE,
    payload: favorite
  };
};

export const removeFavourite = (favorites = []) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: favorites
  };
};
