export const JOKE_SEARCH_TYPE = "JOKE_SEARCH_TYPE";

// change joke Search Type
export const changeJokeSearchType = (searchType = "") => {
  return {
    type: JOKE_SEARCH_TYPE,
    payload: searchType
  };
};
