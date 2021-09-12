import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../../store/actions/jokeSearch";

export default function TextSearchInput({ searchView }) {
  const dispatch = useDispatch();

  const textSearchInputDisplay = searchView === "search" ? "block" : "";

  const textSearchInputProps = {
    type: "text",
    placeholder: "Free text search... ",
    style: { display: textSearchInputDisplay },
    onChange: handleChangeSearchQuery,
  };

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
    <>
      <input {...textSearchInputProps} />
    </>
  );
}
