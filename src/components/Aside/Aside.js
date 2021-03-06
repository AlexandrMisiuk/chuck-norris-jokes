import React, { useEffect } from "react";

import CrossSVG from "../svg/CrossSVG";
import EqualsSVG from "../svg/EqualsSVG";
import JokeCard from "../JokeCard";

import { useDispatch, useSelector } from "react-redux";
import { removeFavourite } from "../../store/actions/favourites";

const selectFavourites = (state) => state.favourites;

export default function Aside({ isFavouritesShow, setIsFavouritesShow }) {
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
  };

  const favouriteBtnProps = {
    className: "favourite-btn",
    onClick: () => setIsFavouritesShow(!isFavouritesShow),
  };

  // elements
  const favouriteBtnIcon = isFavouritesShow ? <CrossSVG /> : <EqualsSVG />;

  const jokeCards = favourites.map((joke) => {
    const props = {
      isFavourite: true,
      key: joke.id,
      jokeItem: joke,
      handleChangeFavourite: handleRemoveFavourite,
    };
    return <JokeCard {...props} />;
  });

  //set favourites to Local Storage
  useEffect(() => {
    const key = "favourites";
    // console.log("set favourites to Local Storage =>>", favourites);

    const favouritesToLocalStorageJSON = JSON.stringify(favourites);
    localStorage.setItem(key, favouritesToLocalStorageJSON);
  }, [favourites]);

  function handleRemoveFavourite(jokeItem) {
    const filteredFavourites = favourites.filter(
      (favouriteJoke) => favouriteJoke.id !== jokeItem.id
    );
    // console.log("filteredFavourites ===>", filteredFavourites);
    const action = removeFavourite(filteredFavourites);
    dispatch(action);
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
