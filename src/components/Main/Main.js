import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { catchTheJokesError } from "../../store/actions/jokes";
import { addFavourite, removeFavourite } from "../../store/actions/favourites";
import { fetchJokes } from "../../store/thunks/fetchJokesThunk";

import JokeSearchForm from "../JokeSearchForm";
import JokeCard from "../JokeCard";

const selectJokeSearch = (state) => state.jokeSearch;
const selectJokes = (state) => state.jokes;
const selectFavourites = (state) => state.favourites;

export default function MainComponent() {
  const {
    searchType: jokeSearchType,
    selectedCategory: jokeSelectedCategory,
    searchQuery: jokeSearchQuery,
  } = useSelector(selectJokeSearch);

  const { receivedJokes, error: jokesError } = useSelector(selectJokes);
  // console.log("receivedJokes ===>", receivedJokes);

  const favourites = useSelector(selectFavourites);
  // console.log("favourites ===>", favourites);

  const dispatch = useDispatch();

  //elements
  const jokeCards = receivedJokes.map((joke) => {
    const props = {
      isMain: true,
      isFavourite: isFavourite(joke),
      key: joke.id,
      jokeItem: joke,
      handleChangeFavourite: handleToggleFavourite,
    };
    return <JokeCard {...props} />;
  });

  function handleToggleFavourite(jokeItem) {
    if (isFavourite(jokeItem)) {
      const filteredFavourites = favourites.filter(
        (favouriteJoke) => favouriteJoke.id !== jokeItem.id
      );
      // console.log("filteredFavourites ===>", filteredFavourites);
      const action = removeFavourite(filteredFavourites);
      dispatch(action);
    } else {
      const action = addFavourite({ ...jokeItem });
      dispatch(action);
    }
  }

  function handleGetJoke(e) {
    e.preventDefault();
    if (jokesError) dispatch(catchTheJokesError(null));

    const action = fetchJokes(
      jokeSearchType,
      jokeSelectedCategory,
      jokeSearchQuery
    );
    // console.log(action);
    dispatch(action);
  }

  function isFavourite(jokeItem) {
    const isFavourite = !!favourites.filter(
      (favouriteJoke) => favouriteJoke.id === jokeItem.id
    ).length;
    return isFavourite;
  }

  return (
    <main>
      <div className="main-heading">
        <h2>Hey!</h2>
        <h3>Let’s try to find a joke for you:</h3>
      </div>
      <JokeSearchForm handleGetJoke={handleGetJoke} />
      <div className="main-jokecards-wrapper">{jokeCards}</div>
    </main>
  );
}
