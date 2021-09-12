import React from "react";
import EqualsSVG from "../svg/EqualsSVG";
import CrossSVG from "../svg/CrossSVG";

export default function Header({ isFavouritesShow, setIsFavouritesShow }) {
  const favouriteBtnIcon = isFavouritesShow ? <CrossSVG /> : <EqualsSVG />;

  return (
    <header>
      <h1>MSI 2020</h1>
      <div
        className="header-favourite-btn"
        onClick={() => setIsFavouritesShow(!isFavouritesShow)}
      >
        {favouriteBtnIcon}
        <h3>Favourite</h3>
      </div>
    </header>
  );
}
