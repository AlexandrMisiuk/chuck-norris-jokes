import React from "react";

import HeartSVG from "../svg/HeartSVG";
import FilledHeartSVG from "../svg/FilledHeartSVG";
import MainJokecardBodyIconSVG from "../svg/MainJokecardBodyIconSVG";
import AsideJokecardBodyIconSVG from "../svg/AsideJokecardBodyIconSVG";
import LinkSVG from "../svg/LinkSVG";

export default function JokeCard({
  isMain,
  isFavourite,
  jokeItem,
  handleChangeFavourite,
}) {
  const { id, url, value, updated_at, categories } = jokeItem;
  const localeUpdatedAtDate = new Date(updated_at).toLocaleString();

  //styles
  const blockClassName = isMain ? "main" : "aside";

  //elements
  const heart = isFavourite ? <FilledHeartSVG /> : <HeartSVG />;
  const bodyIcon = isMain ? (
    <MainJokecardBodyIconSVG />
  ) : (
    <AsideJokecardBodyIconSVG />
  );

  const categoriesElements = isMain
    ? categories.map((category, index) => (
        <p
          className={`${blockClassName}-jokecard-body-content-info-category`}
          key={index}
        >
          {category}
        </p>
      ))
    : null;

  return (
    <div
      className={`${blockClassName}-jokecard`}
      onDoubleClick={() => handleChangeFavourite(jokeItem)}
    >
      <p
        className={`${blockClassName}-jokecard-like`}
        onClick={() => handleChangeFavourite(jokeItem)}
      >
        {heart}
      </p>
      <div className={`${blockClassName}-jokecard-body`}>
        <p className={`${blockClassName}-jokecard-body-icon`}>{bodyIcon}</p>
        <div className={`${blockClassName}-jokecard-body-content`}>
          <p className={`${blockClassName}-jokecard-body-content-id`}>
            ID:&nbsp;
            <a href={url} target="_blank">
              {id} &nbsp;
              <LinkSVG />
            </a>
          </p>
          <p className={`${blockClassName}-jokecard-body-content-text`}>
            {value}
          </p>
          <div className={`${blockClassName}-jokecard-body-content-info`}>
            <p
              className={`${blockClassName}-jokecard-body-content-info-update`}
            >
              Last update: {localeUpdatedAtDate}
            </p>
            {categoriesElements}
          </div>
        </div>
      </div>
    </div>
  );
}
