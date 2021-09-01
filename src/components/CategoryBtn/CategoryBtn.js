import React from "react";

export default function CategoryBtn({ category }) {
  const inputProps = {
    id: "id" + category,
    type: "radio",
    name: "joke_category",
    value: category,
    style: { display: "none" }
  };

  const labelProps = {
    className: "category-btn",
    htmlFor: "id" + category
  };

  return (
    <>
      <input {...inputProps} />
      <label {...labelProps}>{category}</label>
    </>
  );
}
