export const VISIBILITY_OF_FAVOURITES = "favourites/VISIBILITY_OF_FAVOURITES";

// change the visibility of favorites
export const changeFavouritesVisibility = (boolen) => {
  return {
    type: VISIBILITY_OF_FAVOURITES,
    payload: boolen
  };
};
