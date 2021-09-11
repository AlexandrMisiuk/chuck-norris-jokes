import {
  SEARCH_TYPE,
  CATEGORIES,
  SEARCH_ERROR,
  SELECTED_CATEGORY,
  SEARCH_QUERY,
} from "../actions/jokeSearch";

const initialState = {
  searchType: "random",
  searchQuery: "",
  categories: [],
  selectedCategory: "",
  error: null,
};

export const jokeSearch = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TYPE: {
      return { ...state, searchType: action.payload };
    }
    case SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload };
    }
    case CATEGORIES: {
      return { ...state, categories: action.payload };
    }
    case SELECTED_CATEGORY: {
      return { ...state, selectedCategory: action.payload };
    }
    case SEARCH_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
