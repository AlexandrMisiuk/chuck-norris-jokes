import React from "react";

import CrossSVG from "../svg/CrossSVG";
import EqualsSVG from "../svg/EqualsSVG";

import { useDispatch, useSelector } from "react-redux";
import { changeFavouritesVisibility } from "../../store/actions/visibilityOfFavourites";

const selectIsFavouritesShow = (state) => state.favouritesVisibility;

export default function AsideComponent() {
  const isFavouritesShow = useSelector(selectIsFavouritesShow);
  // console.log(isFavouritesShow);
  const dispatch = useDispatch();

  const asideWrapperClassName = isFavouritesShow
    ? "aside-wrapper show"
    : "aside-wrapper";

  const favouriteBtnIcon = isFavouritesShow ? <CrossSVG /> : <EqualsSVG />;

  function handleChangeFavouriteVisibility() {
    const action = changeFavouritesVisibility(isFavouritesShow ? false : true);
    dispatch(action);
  }

  function getBodyHeightPx() {
    return document.body.scrollHeight + "px";
  }

  return (
    <div
      className={asideWrapperClassName}
      style={{ minHeight: getBodyHeightPx() }}
    >
      <aside className="favourite">
        <div
          className="favourite-btn"
          onClick={handleChangeFavouriteVisibility}
        >
          {favouriteBtnIcon}
          <h3>Favourite</h3>
        </div>
        <div className="aside-jokecard">
          <p className="aside-jokecard-like">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z"
                fill="#FF6767"
              />
            </svg>
          </p>
          <div className="aside-jokecard-body">
            <p className="aside-jokecard-body-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F8F8F8" />
                <path
                  d="M27.2504 11H12.7496C11.2335 11 10 12.2333 10 13.7496V22.6238C10 24.1367 11.2281 25.368 12.7399 25.3734V29.4004L18.5271 25.3734H27.2504C28.7665 25.3734 30 24.1399 30 22.6238V13.7496C30 12.2333 28.7665 11 27.2504 11ZM28.8281 22.6238C28.8281 23.4937 28.1204 24.2015 27.2504 24.2015H18.1594L13.9117 27.1573V24.2015H12.7496C11.8796 24.2015 11.1719 23.4937 11.1719 22.6238V13.7496C11.1719 12.8795 11.8796 12.1719 12.7496 12.1719H27.2504C28.1204 12.1719 28.8281 12.8795 28.8281 13.7496V22.6238Z"
                  fill="#ABABAB"
                />
                <path
                  d="M15.3529 15.1407H24.6471V16.3126H15.3529V15.1407Z"
                  fill="#ABABAB"
                />
                <path
                  d="M15.3529 17.6407H24.6471V18.8126H15.3529V17.6407Z"
                  fill="#ABABAB"
                />
                <path
                  d="M15.3529 20.1407H24.6471V21.3126H15.3529V20.1407Z"
                  fill="#ABABAB"
                />
              </svg>
            </p>
            <div className="aside-jokecard-body-content">
              <p className="aside-jokecard-body-content-id">
                ID:&nbsp;
                <a href="#">
                  wxoZ5g2gS0SbJO8kCz_bGA&nbsp;
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.54545 0H5.90909C5.65806 0 5.45454 0.203515 5.45454 0.45455C5.45454 0.705585 5.65806 0.9091 5.90909 0.9091H8.44809L3.76952 5.58768C3.59204 5.76516 3.59204 6.05298 3.76952 6.2305C3.85825 6.31923 3.97458 6.36362 4.09091 6.36362C4.20724 6.36362 4.32359 6.31923 4.4123 6.23048L9.09092 1.55191V4.09091C9.09092 4.34194 9.29444 4.54546 9.54547 4.54546C9.7965 4.54546 10 4.34194 10 4.09091V0.45455C10 0.203515 9.79648 0 9.54545 0Z"
                      fill="#8EA7FF"
                    />
                    <path
                      d="M7.72725 4.54543C7.47622 4.54543 7.2727 4.74894 7.2727 4.99998V9.09089H0.90908V2.72725H4.99999C5.25103 2.72725 5.45454 2.52373 5.45454 2.2727C5.45454 2.02166 5.25103 1.81817 4.99999 1.81817H0.45455C0.203515 1.81817 0 2.02168 0 2.27272V9.54544C0 9.79645 0.203515 9.99997 0.45455 9.99997H7.72727C7.97831 9.99997 8.18182 9.79645 8.18182 9.54542V4.99998C8.1818 4.74894 7.97829 4.54543 7.72725 4.54543Z"
                      fill="#8EA7FF"
                    />
                  </svg>
                </a>
              </p>
              <p className="aside-jokecard-body-content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                corporis sed commodi qui distinctio?
              </p>
              <div className="aside-jokecard-body-content-info">
                <p>Last update: 1923 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
