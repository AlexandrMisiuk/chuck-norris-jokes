import React from "react";

export default function MainComponent() {
  return (
    <main>
      <div className="main-heading">
        <h2>Hey!</h2>
        <h3>Let’s try to find a joke for you:</h3>
      </div>
      <form>
        <div>
          <input
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
            type="radio"
            name="api_reponse_type"
            value="categories"
            id="randomСategoriesInput"
          />
          <label htmlFor="randomСategoriesInput">Сategories</label>
        </div>
        <div className="categories-btns">
          <button type="button">animal</button>
          <button type="button" className="active">
            animal
          </button>
        </div>
        <div>
          <input
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
      <div className="main-jokecards-wrapper">
        <div className="main-jokecard">
          <p className="main-jokecard-like">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17ZM5.58716 1.11932C4.37363 1.11932 3.25882 1.58203 2.44781 2.42232C1.62476 3.2753 1.17142 4.45439 1.17142 5.74252C1.17142 7.10165 1.70013 8.31719 2.88559 9.68375C4.03137 11.0047 5.73563 12.3923 7.70889 13.9989L7.71255 14.0018C8.4024 14.5635 9.18442 15.2003 9.99832 15.8802C10.8171 15.199 11.6003 14.5612 12.2916 13.9986C14.2647 12.392 15.9688 11.0047 17.1146 9.68375C18.2999 8.31719 18.8286 7.10165 18.8286 5.74252C18.8286 4.45439 18.3752 3.2753 17.5522 2.42232C16.7413 1.58203 15.6264 1.11932 14.413 1.11932C13.524 1.11932 12.7078 1.38931 11.9872 1.92171C11.3449 2.39637 10.8975 2.99642 10.6352 3.41627C10.5003 3.63217 10.2629 3.76105 10 3.76105C9.73709 3.76105 9.49966 3.63217 9.36478 3.41627C9.10263 2.99642 8.65524 2.39637 8.01285 1.92171C7.29218 1.38931 6.47598 1.11932 5.58716 1.11932Z"
                fill="#FF6767"
              />
            </svg>
          </p>
          <div className="main-jokecard-body">
            <p className="main-jokecard-body-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="white" />
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
            <div className="main-jokecard-body-content">
              <p className="main-jokecard-body-content-id">
                ID:&nbsp;
                <a href="#">
                  wxoZ5g2gS0SbJO8kCz_bGA&nbsp;{" "}
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
              <p className="main-jokecard-body-content-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                corporis sed commodi qui distinctio?
              </p>
              <div className="main-jokecard-body-content-info">
                <p>Last update: 1923 hours ago</p>
                <p>celebrity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
