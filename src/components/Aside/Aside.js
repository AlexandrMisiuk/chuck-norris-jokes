import React, { useEffect } from "react";

import CrossSVG from "../svg/CrossSVG";
import EqualsSVG from "../svg/EqualsSVG";
import JokeCard from "../JokeCard";

import { useDispatch, useSelector } from "react-redux";
import { changeFavouritesVisibility } from "../../store/actions/visibilityOfFavourites";
import { removeFavourite } from "../../store/actions/favourites";

const selectIsFavouritesShow = (state) => state.favouritesVisibility;
const selectFavourites = (state) => state.favourites;

export default function AsideComponent() {
  const isFavouritesShow = useSelector(selectIsFavouritesShow);
  // console.log(isFavouritesShow);
  const favourites = useSelector(selectFavourites);
  // console.log("favourites ===>", favourites);

  const dispatch = useDispatch();

  //styles
  const asideWrapperClassName = isFavouritesShow
    ? "aside-wrapper show"
    : "aside-wrapper";

  //props
  const asideWrapperProps = {
    className: asideWrapperClassName,
    style: { minHeight: getBodyHeightPx() }
  };

  const favouriteBtnProps = {
    className: "favourite-btn",
    onClick: handleChangeFavouriteVisibility
  };

  // elements
  const favouriteBtnIcon = isFavouritesShow ? <CrossSVG /> : <EqualsSVG />;

  const jokeCards = favourites.map((joke) => {
    const props = {
      isMain: false,
      isFavourite: true,
      key: joke.id,
      jokeItem: joke,
      handleChangeFavourite: handleRemoveFavourite
    };
    return <JokeCard {...joke} {...props} />;
  });

  //set favourites to Local Storage
  useEffect(() => {
    const key = "favourites";
    // console.log("set favourites to Local Storage =>>", favourites);

    const favouritesToLocalStorageJSON = JSON.stringify(favourites);
    localStorage.setItem(key, favouritesToLocalStorageJSON);
  }, [favourites]);

  function handleChangeFavouriteVisibility() {
    const action = changeFavouritesVisibility(isFavouritesShow ? false : true);
    dispatch(action);
  }

  function handleRemoveFavourite(jokeItem) {
    const filteredFavourites = favourites.filter(
      (favouriteJoke) => favouriteJoke.id !== jokeItem.id
    );
    // console.log("filteredFavourites ===>", filteredFavourites);
    const action = removeFavourite(filteredFavourites);
    dispatch(action);
  }

  function getBodyHeightPx() {
    return document.body.scrollHeight + "px";
  }

  return (
    <div {...asideWrapperProps}>
      <aside className="favourite">
        <div {...favouriteBtnProps}>
          {favouriteBtnIcon}
          <h3>Favourite</h3>
        </div>
        {jokeCards}
      </aside>
    </div>
  );
}
