import { JOKE_SEARCH_TYPE } from "../actions/jokeSearchType";

export const jokeSearchReducer = (state = { searchType: "random" }, action) => {
  switch (action.type) {
    case JOKE_SEARCH_TYPE: {
      return { ...state, searchType: action.payload };
    }
    default: {
      return state;
    }
  }
};
