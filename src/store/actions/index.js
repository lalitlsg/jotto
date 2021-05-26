export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
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
  return (dispatch, getState) => {};
};
