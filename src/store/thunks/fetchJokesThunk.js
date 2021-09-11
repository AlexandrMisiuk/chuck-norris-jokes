import { setReceivedJokes, catchTheJokesError } from "../actions/jokes";

export function fetchJokes(url) {
  return (dispatch) => {
    return fetch(url)
      .then((res) => res.json())
      .then(
        (responseResult) => {
          if (responseResult.result)
            dispatch(setReceivedJokes(responseResult.result));
          else dispatch(setReceivedJokes([responseResult]));
        },
        (error) => {
          dispatch(setReceivedJokes([]));
          dispatch(catchTheJokesError(error));
        }
      );
  };
}

export function getSearchURL(
  searchType = "random",
  selectedCategory = "",
  searchQuery = ""
) {
  const baseUrl = "https://api.chucknorris.io/jokes";

  let url;
  // https://api.chucknorris.io/jokes/random
  if (searchType === "random") url = `${baseUrl}/${searchType}`;

  // https://api.chucknorris.io/jokes/random?category={category}
  if (searchType === "category" && selectedCategory)
    url = `${baseUrl}/random?${searchType}=${selectedCategory}`;

  // https://api.chucknorris.io/jokes/search?query={query}
  if (searchType === "search" && searchQuery)
    url = `${baseUrl}/${searchType}?query=${searchQuery}`;

  return url;
}
