export const JOKE_SEARCH_TYPE = "jokes/JOKE_SEARCH_TYPE";
export const JOKE_CATEGORIES = "jokes/JOKE_CATEGORIES";
export const JOKE_SEARCH_ERROR = "jokes/JOKE_SEARCH_ERROR";

export const changeJokeSearchType = (searchType = "") => {
  return {
    type: JOKE_SEARCH_TYPE,
    payload: searchType
  };
};

export const getJokeCategories = (fetchResponse = []) => {
  return {
    type: JOKE_CATEGORIES,
    payload: fetchResponse
  };
};

export const catchTheError = (error) => {
  return {
    type: JOKE_SEARCH_ERROR,
    payload: error
  };
};
