import {
  JOKE_SEARCH_TYPE,
  JOKE_CATEGORIES,
  JOKE_SEARCH_ERROR
} from "../actions/jokeSearch";

const initialState = {
  searchType: "random",
  categories: [],
  error: null
};

export const jokeSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOKE_SEARCH_TYPE: {
      return { ...state, searchType: action.payload };
    }
    case JOKE_CATEGORIES: {
      return { ...state, categories: action.payload };
    }
    case JOKE_SEARCH_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
