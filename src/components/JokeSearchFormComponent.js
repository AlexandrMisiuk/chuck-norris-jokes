import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeJokeSearchType } from "../actions/jokeSearchType";

const selectJokeSearchType = (state) => state.jokeSearch.searchType;

export default function JokeSearchFormComponent() {
  const jokeSearchType = useSelector(selectJokeSearchType);
  // console.log(jokeSearchType);
  const categoriesBtnsDisplay = jokeSearchType === "categories" ? "" : "none";

  const dispatch = useDispatch();

  function handleChangeJokeSearchType(e) {
    const value = e.target.value;
    const action = changeJokeSearchType(value);
    dispatch(action);
  }

  return (
    <form>
      <div>
        <input
          onClick={handleChangeJokeSearchType}
          type="radio"
          name="api_reponse_type"
          value="random"
          id="randomRadioInput"
          defaultChecked
        />
        <label htmlFor="randomRadioInput">Random</label>
      </div>
      <div>
        <input
          onClick={handleChangeJokeSearchType}
          type="radio"
          name="api_reponse_type"
          value="categories"
          id="randomСategoriesInput"
        />
        <label htmlFor="randomСategoriesInput">Сategories</label>
      </div>
      <div
        className="categories-btns"
        style={{ display: categoriesBtnsDisplay }}
      >
        <button type="button">animal</button>
        <button type="button" className="active">
          animal
        </button>
      </div>
      <div>
        <input
          onClick={handleChangeJokeSearchType}
          type="radio"
          name="api_reponse_type"
          value="search"
          id="randomСategoriesInput"
        />
        <label htmlFor="randomSearchInput">Search</label>
      </div>
      <input type="text" placeholder="Free text search..." />
      <button type="submit">Get a joke</button>
    </form>
  );
}
