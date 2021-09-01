import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeJokeSearchType } from "../../store/actions/jokeSearch";
import { fetchJokeCategories } from "../../store/thunks/fetchCategoriesThunk";
import CategoryBtn from "../CategoryBtn";

const selectJokeSearch = (state) => state.jokeSearch;

export default function JokeSearchFormComponent() {
  const jokeSearch = useSelector(selectJokeSearch);
  console.log(jokeSearch);
  const jokeSearchType = jokeSearch.searchType;
  const jokeSearchCategories = jokeSearch.categories;

  const dispatch = useDispatch();

  //elements
  const jokeSearchCategoriesBtns = jokeSearchCategories.map(
    (category, index) => (
      <CategoryBtn key={index} category={category} index={index} />
    )
  );

  //styles
  const categoriesBtnsDisplay = jokeSearchType === "category" ? "" : "none";
  const categoriesBtnsStyles = { display: categoriesBtnsDisplay };

  const textSearchInputDisplay = jokeSearchType === "search" ? "" : "none";

  //props
  const randomRadioInputProps = {
    onClick: handleChangeJokeSearchType,
    type: "radio",
    name: "api_reponse_type",
    value: "random",
    id: "randomRadioInput"
  };

  const categoriesRadioInputProps = {
    onClick: handleChangeJokeSearchType,
    type: "radio",
    name: "api_reponse_type",
    value: "category",
    id: "categoriesRadioInput"
  };

  const searchRadioInputProps = {
    onClick: handleChangeJokeSearchType,
    type: "radio",
    name: "api_reponse_type",
    value: "search",
    id: "searchRadioInput"
  };

  const textSearchInputProps = {
    type: "text",
    placeholder: "Free text search...",
    style: { display: textSearchInputDisplay }
  };

  //effects
  useEffect(() => {
    dispatch(fetchJokeCategories);
  }, []);

  function handleChangeJokeSearchType(e) {
    const value = e.target.value;
    const action = changeJokeSearchType(value);
    dispatch(action);
  }

  return (
    <form>
      <div>
        <input defaultChecked {...randomRadioInputProps} />
        <label htmlFor="randomRadioInput">Random</label>
      </div>
      <div>
        <input {...categoriesRadioInputProps} />
        <label htmlFor="categoriesRadioInput">Сategories</label>
      </div>
      <div className="categories-btns" style={categoriesBtnsStyles}>
        {jokeSearchCategoriesBtns}
      </div>
      <div>
        <input {...searchRadioInputProps} />
        <label htmlFor="searchRadioInput">Search</label>
      </div>
      <input {...textSearchInputProps} />
      <button type="submit">Get a joke</button>
    </form>
  );
}
