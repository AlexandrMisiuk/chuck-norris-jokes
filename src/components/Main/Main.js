import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { catchTheJokesError } from "../../store/actions/jokes";
import { addFavourite } from "../../store/actions/favourites";
import { fetchJokes } from "../../store/thunks/fetchJokesThunk";

import JokeSearchForm from "../JokeSearchForm";
import JokeCard from "../JokeCard";

const selectJokeSearch = (state) => state.jokeSearch;
const selectJokes = (state) => state.jokes;
const selectFavourites = (state) => state.favourites;

export default function MainComponent() {
  const jokeSearch = useSelector(selectJokeSearch);
  // console.log("jokeSearch ===>", jokeSearch);
  const jokeSearchType = jokeSearch.searchType;
  const jokeSelectedCategory = jokeSearch.selectedCategory;
  const jokeSearchQuery = jokeSearch.searchQuery;

  const jokes = useSelector(selectJokes);
  // console.log("jokes ===>", jokes);
  const receivedJokes = jokes.receivedJokes;
  // console.log("receivedJokes ===>", receivedJokes);

  const favourites = useSelector(selectFavourites);
  // console.log("favourites ===>", favourites);

  const dispatch = useDispatch();

  //elements
  const jokeCards = receivedJokes.map((joke) => {
    const props = {
      isFavourite: isFavourite(joke),
      isMain: true,
      key: joke.id,
      jokeItem: joke,
      handleChangeFavourite: handleAddFavourite
    };
    return <JokeCard {...joke} {...props} />;
  });

  function handleAddFavourite(jokeItem) {
    if (!isFavourite(jokeItem)) {
      const action = addFavourite({ ...jokeItem });
      dispatch(action);
    }
  }

  function handleGetJoke(e) {
    e.preventDefault();
    if (jokes.error) dispatch(catchTheJokesError(null));

    const action = fetchJokes(
      jokeSearchType,
      jokeSelectedCategory,
      jokeSearchQuery
    );
    // console.log(action);
    dispatch(action);
  }

  function isFavourite(jokeItem) {
    let isFavourite;
    for (const favouriteJoke of favourites) {
      isFavourite = Object.is(favouriteJoke.id, jokeItem.id);
      if (isFavourite) break;
    }
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
