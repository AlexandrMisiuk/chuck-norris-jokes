export const RECEIVE_JOKES = "jokes/RECEIVE_JOKES";
export const JOKES_ERROR = "jokes/JOKES_ERROR";

export const setReceivedJokes = (fetchResponse = {}) => {
  return {
    type: RECEIVE_JOKES,
    payload: fetchResponse
  };
};

export const catchTheJokesError = (error) => {
  return {
    type: JOKES_ERROR,
    payload: error
  };
};
