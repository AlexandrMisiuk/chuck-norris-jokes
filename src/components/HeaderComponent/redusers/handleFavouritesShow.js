import { SHOW_FAVOURITES } from "../actions/showFavourites";

export const handleFavouriteShow = (state, action) => {
  switch (action.type) {
    case SHOW_FAVOURITES: {
      return { ...state, isFavouritesShow: action.payload };
    }
    default: {
      return;
    }
  }
};
