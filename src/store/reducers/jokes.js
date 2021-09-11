import { RECEIVE_JOKES, JOKES_ERROR } from "../actions/jokes";

const initialState = {
  receivedJokes: [],
  error: null,
};

export const jokes = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_JOKES: {
      return { ...state, receivedJokes: action.payload };
    }
    case JOKES_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
