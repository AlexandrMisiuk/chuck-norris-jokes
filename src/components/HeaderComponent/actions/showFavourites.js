export const SHOW_FAVOURITES = "SHOW_FAVORITES";

export const changeFavouritesShow = (boolen) => {
  return {
    type: SHOW_FAVOURITES,
    payload: boolen
  };
};
