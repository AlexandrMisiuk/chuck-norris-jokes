export const SEARCH_TYPE = "jokes/SEARCH_TYPE";
export const CATEGORIES = "jokes/CATEGORIES";
export const SEARCH_ERROR = "jokes/SEARCH_ERROR";
export const SELECTED_CATEGORY = "jokes/SELECTED_CATEGORY";
export const SEARCH_QUERY = "jokes/SEARCH_QUERY";

export const setSearchQuery = (query = "") => {
  return {
    type: SEARCH_QUERY,
    payload: query
  };
};

export const changeSelectedJokeCategory = (category = "") => {
  return {
    type: SELECTED_CATEGORY,
    payload: category
  };
};

export const changeJokeSearchType = (searchType = "") => {
  return {
    type: SEARCH_TYPE,
    payload: searchType
  };
};

export const getJokeCategories = (fetchResponse = []) => {
  return {
    type: CATEGORIES,
    payload: fetchResponse
  };
};

export const catchTheSearchError = (error) => {
  return {
    type: SEARCH_ERROR,
    payload: error
  };
};
