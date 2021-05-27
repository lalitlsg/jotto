import { getLetterMatchCount } from "../../helpers";
import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
};

// export const correctGuess = () => {
//   return { type: actionTypes.CORRECT_GUESS };
// };

/**
 * Returns Redux thunk function that dispatch GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action.
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS,
      });
    }
  };
};

export const getSecretWord = () => {
  // return async (dispatch) => {
  // const response = await axios.get("http://localhost:8000");
  return {
    type: actionTypes.SET_SECRET_WORD,
    payload: "party",
  };
  // };
};
