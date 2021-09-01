import React from "react";
import EqualsSVG from "../svg/EqualsSVG";
import CrossSVG from "../svg/CrossSVG";

import { useDispatch, useSelector } from "react-redux";

import { changeFavouritesVisibility } from "../../store/actions/visibilityOfFavourites";

const selectIsFavouritesShow = (state) => state.favouritesVisibility;

export default function Header() {
  const isFavouritesShow = useSelector(selectIsFavouritesShow);
  // console.log(isFavouritesShow);
  const dispatch = useDispatch();

  const favouriteBtnIcon = isFavouritesShow ? <CrossSVG /> : <EqualsSVG />;

  function handleChangeFavouriteVisibility() {
    const action = changeFavouritesVisibility(isFavouritesShow ? false : true);
    dispatch(action);
  }

  return (
    <header>
      <h1>MSI 2020</h1>
      <div
        className="header-favourite-btn"
        onClick={handleChangeFavouriteVisibility}
      >
        {favouriteBtnIcon}
        <h3>Favourite</h3>
      </div>
    </header>
  );
}
