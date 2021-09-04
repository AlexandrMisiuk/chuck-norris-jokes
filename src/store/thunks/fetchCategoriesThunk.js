import { getJokeCategories, catchTheSearchError } from "../actions/jokeSearch";

const baseUrl = "https://api.chucknorris.io/jokes/";
const query = "categories";

export function fetchJokeCategories(dispatch) {
  return fetch(baseUrl + query)
    .then((res) => res.json())
    .then(
      (result) => {
        dispatch(getJokeCategories(result));
      },
      (error) => {
        dispatch(catchTheSearchError(error));
      }
    );
}
