import React, { useState } from "react";
import CrossSVG from "../svgComponents/CrossSVG";
import EqualsSVG from "../svgComponents/EqualsSVG";

export default function Header() {
  const [isFavouritesShow, setIsFavouritesShow] = useState(false);

  let headerFavouriteBtnClassName = isFavouritesShow
    ? "header-favourite-btn show"
    : "header-favourite-btn";

  let iconSVG = isFavouritesShow ? <CrossSVG /> : <EqualsSVG />;

  function handleClickFavouriteShow() {
    setIsFavouritesShow(isFavouritesShow ? false : true);
  }

  return (
    <header>
      <h1>MSI 2020</h1>
      <div
        className={headerFavouriteBtnClassName}
        onClick={handleClickFavouriteShow}
      >
        {iconSVG}
        <h3>Favourite</h3>
      </div>
    </header>
  );
}
