import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { changeJokeSearchType } from "../../store/actions/jokeSearch";
import { fetchJokeCategories } from "../../store/thunks/fetchCategoriesThunk";

import CategoriesBtns from "./components/CategoriesBtns";
import TextSearchInput from "./components/TextSearchInput";

export default function JokeSearchFormComponent({ handleGetJoke }) {
  const [searchView, setSearchView] = useState(null);

  const dispatch = useDispatch();

  //props
  const randomRadioInputProps = {
    onClick: handleChangeJokeSearchType,
    type: "radio",
    name: "api_reponse_type",
    value: "random",
    id: "randomRadioInput",
  };

  const categoriesRadioInputProps = {
    onClick: handleChangeJokeSearchType,
    type: "radio",
    name: "api_reponse_type",
    value: "category",
    id: "categoriesRadioInput",
  };

  const searchRadioInputProps = {
    onClick: handleChangeJokeSearchType,
    type: "radio",
    name: "api_reponse_type",
    value: "search",
    id: "searchRadioInput",
  };

  //effects
  useEffect(() => {
    dispatch(fetchJokeCategories);
  }, []);

  function handleChangeJokeSearchType(e) {
    const value = e.target.value;
    const action = changeJokeSearchType(value);
    dispatch(action);

    setSearchView(value);
  }

  return (
    <form onSubmit={handleGetJoke}>
      <div>
        <input defaultChecked {...randomRadioInputProps} />
        <label htmlFor="randomRadioInput">Random</label>
      </div>
      <div>
        <input {...categoriesRadioInputProps} />
        <label htmlFor="categoriesRadioInput">Сategories</label>
      </div>
      <CategoriesBtns searchView={searchView} />
      <div>
        <input {...searchRadioInputProps} />
        <label htmlFor="searchRadioInput">Search</label>
      </div>
      <TextSearchInput searchView={searchView} />
      <button type="submit">Get a joke</button>
    </form>
  );
}
