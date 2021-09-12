import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeSelectedJokeCategory } from "../../../store/actions/jokeSearch";
import CategoryBtn from "./CategoryBtn";

const selectJokeSearch = (state) => state.jokeSearch;

export default function CategoriesBtns({ searchView }) {
  const { categories: jokeSearchCategories } = useSelector(selectJokeSearch);

  const dispatch = useDispatch();
  //elements
  const jokeSearchCategoriesBtns = jokeSearchCategories.map(
    (category, index) => {
      const categoryBtnProps = {
        key: index + 1,
        category: category,
        onClick: handleChangeSelectedJokeCategory,
      };

      return <CategoryBtn {...categoryBtnProps} />;
    }
  );

  //styles
  const categoriesBtnsDisplay = searchView === "category" ? "" : "none";
  const categoriesBtnsStyles = { display: categoriesBtnsDisplay };

  function handleChangeSelectedJokeCategory(e) {
    const value = e.target.value;
    const action = changeSelectedJokeCategory(value);
    dispatch(action);
  }

  return (
    <div className="categories-btns" style={categoriesBtnsStyles}>
      {jokeSearchCategoriesBtns}
    </div>
  );
}
