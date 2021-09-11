import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  changeJokeSearchType,
  changeSelectedJokeCategory,
  setSearchQuery,
} from "../../store/actions/jokeSearch";
import { fetchJokeCategories } from "../../store/thunks/fetchCategoriesThunk";
import CategoryBtn from "../CategoryBtn";

const selectJokeSearch = (state) => state.jokeSearch;

export default function JokeSearchFormComponent({ handleGetJoke }) {
  const { searchType: jokeSearchType, categories: jokeSearchCategories } =
    useSelector(selectJokeSearch);

  const dispatch = useDispatch();

  //elements
  const jokeSearchCategoriesBtns = jokeSearchCategories.map(
    (category, index) => {
      const categoryBtnProps = {
        key: index,
        category: category,
        onClick: handleChangeSelectedJokeCategory,
      };

      return <CategoryBtn {...categoryBtnProps} />;
    }
  );

  //styles
  const categoriesBtnsDisplay = jokeSearchType === "category" ? "" : "none";
  const categoriesBtnsStyles = { display: categoriesBtnsDisplay };

  const textSearchInputDisplay = jokeSearchType === "search" ? "block" : "";

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

  const textSearchInputProps = {
    type: "text",
    placeholder: "Free text search... ",
    style: { display: textSearchInputDisplay },
    onChange: handleChangeSearchQuery,
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

  function handleChangeSelectedJokeCategory(e) {
    const value = e.target.value;
    const action = changeSelectedJokeCategory(value);
    dispatch(action);
  }

  function handleChangeSearchQuery(e) {
    const value = e.target.value;
    const style = e.target.style;
    // console.dir(e.target);
    const maxQueryLength = 120;
    const minQueryLength = 3;

    if (value.length < minQueryLength || value.length > maxQueryLength) {
      e.target.placeholder = "Request must be more than 3 characters.";
      style.borderColor = "red";
    }

    if (value.length >= minQueryLength && value.length <= maxQueryLength) {
      style.borderColor = "";
      const action = setSearchQuery(value);
      dispatch(action);
    }
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
